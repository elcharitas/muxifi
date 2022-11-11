import { useCallback, useEffect, useMemo } from "react";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import { getIpfsUrl } from "src/utils/formats";
import { useQuery } from "./useQuery";
import { usePlaylist } from "./usePlaylist";
import { useStore } from "./useStore";

export const useControl = () => {
    const { currentTrack, dispatch, set } = useStore("currentTrack");
    const { read } = usePlaylist();
    const { data: albumData, mutate } = useQuery("album_meta", {
        id: currentTrack.id,
        type: currentTrack.type,
        skip: currentTrack.type === "playlist",
    });
    const item = useMemo(() => {
        if (currentTrack.type === "playlist") {
            const [playlist] = read(currentTrack.id);
            return playlist || {};
        }
        return albumData?.result[0].metadata || {};
    }, [albumData?.result, currentTrack, read]);
    const queue = item?.queue || [];
    const current = queue[currentTrack.current] || {};
    const { percentComplete, ...position } = useAudioPosition({
        highRefreshRate: true,
    });
    const { ready, load, error, volume, ...player } = useAudioPlayer({
        src: getIpfsUrl(current?.src),
        autoplay: false,
    });

    const goto = useCallback(
        (percent) => {
            const newPosition = (position.duration * percent) / 100;
            if (position.duration > 0) {
                position.seek(newPosition);
                set("position", newPosition);
            }
        },
        [position, set],
    );

    const setVolume = useCallback(
        (vol) => {
            volume(vol / 100);
            set("volume", vol);
        },
        [set, volume],
    );

    useEffect(() => {
        if (currentTrack.volume) {
            volume(currentTrack.volume);
        }
    }, [volume, currentTrack]);

    useEffect(() => {
        if (currentTrack.id !== albumData?.result[0].tokenId) {
            mutate();
        }
    }, [currentTrack.id, albumData, mutate]);

    return {
        ready: ready || item.name !== undefined,
        track: {
            ...current,
            id: Number(currentTrack.id),
            name: current?.name || item?.name || "------",
            artiste: current?.artiste || {
                id: 0,
                name: "----",
            },
            favorite: false,
            percentComplete,
            goto,
            volume: setVolume,
            playing: currentTrack.playing,
            item,
            ...player,
            ...position,
            togglePlayPause() {
                mutate().then(() => {
                    player.togglePlayPause();
                });
            },
        },
        repeat: currentTrack.repeat,
        shuffle: currentTrack.shuffle,
        volume: currentTrack.volume,
        setTrack: set,
        dispatch,
        queue,
        error,
        load,
    };
};
