import { useLocalStorage } from "usehooks-ts";

const INITIAL_STATE = {};

export const useStore = () => {
    const [store, setStore] = useLocalStorage("muxifi", INITIAL_STATE);

    const dispatch = (key, value) => {
        setStore((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const reset = () => setStore(INITIAL_STATE);

    return { store, setStore, dispatch, reset };
};
