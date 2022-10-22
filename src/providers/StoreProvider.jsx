import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { INITIAL_STORE, storeReducer } from "src/utils/store";

const StoreContext = createContext({
    store: INITIAL_STORE,
    dispatch: () => {},
});

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
    const [store, dispatch] = useImmerReducer(storeReducer, INITIAL_STORE);
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
