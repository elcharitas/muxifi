import { useStore } from "./useStore";

export const useControl = () => {
    const { currentTrack, set, ready } = useStore("currentTrack");

    return {
        ready: ready && currentTrack.id !== 0,
        track: {
            ...currentTrack,
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
