export const INITIAL_STORE = {};

export const STORE_REDUCER = {
    reset(draft) {
        draft = INITIAL_STORE;
    },
};

export const storeReducer = (draft, { type, payload }) => {
    if (type in STORE_REDUCER) {
        STORE_REDUCER[type](draft, payload);
    }
};
