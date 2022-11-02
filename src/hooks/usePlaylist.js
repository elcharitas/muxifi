import { CONFIG } from "src/config";
import { useAccount } from "wagmi";
import { useOrbitDb } from "./useOrbitDB";

export const usePlaylist = () => {
    const { address } = useAccount();
    const { db, ...rest } = useOrbitDb(CONFIG.ORBIT.DEFAULT_PATH, {
        type: "docstore",
        public: true,
    });

    return {
        playlist: db,
        ...rest,
        records: db?.query((doc) => doc.address === address),
    };
};
