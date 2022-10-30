import { useCallback } from "react";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import { useStore } from "./useStore";

export const useControl = () => {
    const { currentTrack, set, ready } = useStore("currentTrack");
    const { percentComplete, ...position } = useAudioPosition({
        highRefreshRate: true,
    });
    const { ready: isPlayerReady, load, error, ...player } = useAudioPlayer({
        src: String(currentTrack.id),
        autoplay: false,
    });

    const goto = useCallback(
        (percent) => {
            position.seek(position.duration * percent);
        },
        [position],
    );

    return {
        ready: ready && currentTrack.id !== 0 && isPlayerReady,
        track: {
            id: Number(currentTrack.id),
            name: "Music Name",
            artiste: {
                id: 1,
                name: "Artiste",
            },
            favorite: false,
            position: percentComplete,
            playlist: {
                id: Number(currentTrack.playlist),
            },
            goto,
            ...player,
            ...position,
        },
        repeat: currentTrack.repeat,
        shuffle: currentTrack.shuffle,
        setTrack: set,
        error,
        load,
    };
};
