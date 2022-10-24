import { useStore } from "./useStore";

export const useControl = () => {
    const { currentTrack, set, ready } = useStore("currentTrack");

    return {
        ready: ready && currentTrack.id !== 0,
        track: currentTrack,
        setTrack: set,
    };
};
