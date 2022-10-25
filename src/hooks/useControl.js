import { useStore } from "./useStore";

export const useControl = () => {
    const { currentTrack, set, ready } = useStore("currentTrack");

    return {
        ready: ready && currentTrack.id !== 0,
        track: {
            id: Number(currentTrack.id),
            playlist: {
                id: Number(currentTrack.playlist),
            },
            position: Number(currentTrack.position),
            isPlaying: Boolean(currentTrack.isPlaying),
            name: "Music Name",
            artiste: {
                id: 1,
                name: "Artiste",
            },
            favorite: false,
        },
        repeat: false,
        shuffle: false,
        setTrack: set,
    };
};
