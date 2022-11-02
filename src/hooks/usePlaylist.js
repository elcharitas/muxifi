import { CONFIG } from "src/config";
import { useAccount } from "wagmi";
import { useOrbitDb } from "./useOrbitDB";

export const usePlaylist = () => {
    const { address } = useAccount();
    const { db: muxifiDb } = useOrbitDb(CONFIG.ORBIT.DEFAULT_PATH, {
        type: "keyvalue",
        public: true,
        create: true,
    });

    const dbName = muxifiDb?.get(address) || address;
    return useOrbitDb(dbName, {
        type: "docstore",
        public: true,
        create: true,
    });
};
