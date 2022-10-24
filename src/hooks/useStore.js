import { useLocalStorage, useIsMounted, useIsClient } from "usehooks-ts";

/** Initial state of the app's store */
const INITIAL_STATE = {
    appVersion: "1.0.0",
    currentTrack: {
        id: 0,
        playlist: 0,
        position: 0,
        isPlaying: false,
    },
};

/**
 * Global state hook
 *
 * @param {keyof INITIAL_STATE} path
 * @returns
 */
export const useStore = (path = "appVersion") => {
    const [store, setStore] = useLocalStorage("muxifi", INITIAL_STATE);
    const isMounted = useIsMounted();
    const isClient = useIsClient();

    const dispatch = (key, value) => {
        setStore((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const reset = () => setStore(INITIAL_STATE);

    return {
        store,
        dispatch,
        reset,
        [path]: store[path],
        /**
         * Setter for the current path
         *
         * @param {keyof store[path]} key
         * @param {store[path][key]} value
         */
        set(key, value) {
            this.dispatch(path, {
                ...store[path],
                [key]: value,
            });
        },
        ready: isMounted && isClient,
    };
};
