import { useCallback, useEffect } from "react";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import { useQuery } from "./useQuery";
import { usePlaylist } from "./usePlaylist";
import { useStore } from "./useStore";

export const useControl = () => {
    const { currentTrack, set, ready } = useStore("currentTrack");
    const { read } = usePlaylist();
    const { data: albumData } = useQuery("album_meta", {
        id: currentTrack.id,
        skip: !currentTrack.type || currentTrack.type === "playlists",
    });
    const [playlist] = read(currentTrack.id, currentTrack.type);
    const item = albumData?.[0] || playlist || {};
    const queue = item?.queue || [];
    const current = queue[currentTrack.current] || {};
    const { percentComplete, ...position } = useAudioPosition({
        highRefreshRate: true,
    });
    const {
        ready: isPlayerReady,
        load,
        error,
        volume,
        ...player
    } = useAudioPlayer({
        src: String(current?.src),
        autoplay: false,
    });

    const goto = useCallback(
        (percent) => {
            const newPosition = position.duration * percent;
            if (newPosition > 0) {
                position.seek(newPosition);
                set("position", newPosition);
            }
        },
        [position, set],
    );

    const setVolume = useCallback(
        (vol) => {
            volume(vol);
            set("volume", vol);
        },
        [set, volume],
    );

    useEffect(() => {
        if (currentTrack.volume) {
            volume(currentTrack.volume);
        }
    }, [volume, currentTrack]);

    return {
        ready: ready && currentTrack.id !== 0,
        track: {
            ...current,
            id: Number(currentTrack.id),
            name: current?.name || "------",
            artiste: current?.artiste || {
                id: 0,
                name: "----",
            },
            favorite: false,
            position: percentComplete,
            playlist,
            goto,
            volume: setVolume,
            playing: currentTrack.playing,
            item,
            ...player,
            ...position,
        },
        repeat: currentTrack.repeat,
        shuffle: currentTrack.shuffle,
        volume: currentTrack.volume,
        setTrack: set,
        queue,
        error,
        load,
    };
};
