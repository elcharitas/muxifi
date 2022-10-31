import { CONFIG } from "src/config";
import { useAccount } from "wagmi";
import { useOrbitDb } from "./useOrbitDB";

export const usePlaylist = () => {
    const { address } = useAccount();
    const { records: muxifiDb } = useOrbitDb(CONFIG.ORBIT.DEFAULT_PATH, {
        type: "keyvalue",
        public: true,
        create: true,
    });

    const dbName = muxifiDb.get(address) || address;
    const { records } = useOrbitDb(dbName, {
        type: "docs",
        public: true,
        create: true,
    });

    return records;
};
