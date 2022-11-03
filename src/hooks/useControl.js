import { useCallback, useEffect } from "react";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import { usePlaylist } from "./usePlaylist";
import { useStore } from "./useStore";

export const useControl = () => {
    const { currentTrack, set, ready } = useStore("currentTrack");
    const { read } = usePlaylist();
    const [playlist] = read(currentTrack.id);
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
        src: String(playlist?.queue?.[currentTrack.current]?.src),
        autoplay: false,
    });

    const goto = useCallback(
        (percent) => {
            const newPosition = position.duration * percent;
            position.seek(newPosition);
            set("position", newPosition);
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
        ready,
        track: {
            id: Number(currentTrack.id),
            name: "Music Name",
            artiste: {
                id: 1,
                name: "Artiste",
            },
            favorite: false,
            position: percentComplete,
            playlist,
            goto,
            volume: setVolume,
            playing: currentTrack.playing,
            ...player,
            ...position,
        },
        repeat: currentTrack.repeat,
        shuffle: currentTrack.shuffle,
        volume: currentTrack.volume,
        setTrack: set,
        error,
        load,
    };
};
