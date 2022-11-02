import { useCallback } from "react";
import { CONFIG } from "src/config";
import { useAccount } from "wagmi";
import { useOrbitDb } from "./useOrbitDB";

export const usePlaylist = () => {
    const { address } = useAccount();
    const { db, ...rest } = useOrbitDb(CONFIG.ORBIT.DEFAULT_PATH, {
        type: "docstore",
        public: true,
        create: true,
    });

    const addPlaylist = useCallback(
        (data) => {
            db?.put({ ...data, address });
        },
        [db, address],
    );

    return {
        playlist: db,
        ...rest,
        records: db?.query((doc) => doc.address === address),
        addPlaylist,
    };
};
