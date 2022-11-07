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

    const savePlaylist = useCallback(
        (data) => {
            return db?.put(
                {
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    tags: data.tags || data.name.toLowerCase().split(" "),
                    address,
                },
                {
                    pin: true,
                },
            );
        },
        [db, address],
    );

    const read = useCallback(
        (id, collection) => {
            if (!db) return [{}];
            if (collection in CONFIG.APP.COLLECTIONS) {
                return db.query((doc) => {
                    return doc.id === id && doc.collection === collection;
                });
            }
            return db.query((doc) => doc.id === id);
        },
        [db],
    );

    return {
        playlist: db,
        ...rest,
        created: db?.query((doc) => doc.address === address),
        savePlaylist,
        read,
    };
};
