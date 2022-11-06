import { useEffect, useState, useContext, useCallback } from "react";
import { orbit as orbitContext } from "src/providers/orbitdb/orbit-context";

const registerEvents = async (db, refreshDb) => {
    db.events.on("replicate", () => {
        refreshDb(db);
    });

    db.events.on("replicated", () => {
        refreshDb(db);
    });

    db.events.on("write", () => {
        refreshDb(db);
    });

    db.events.on("error", () => {
        refreshDb(db);
    });
    await refreshDb(db);
};

export const useOrbitDb = (path, { handleError, ...opts }) => {
    const orbit = useContext(orbitContext);
    const [records, setRecords] = useState([]);
    const [orbitDb, setDb] = useState(null);

    const openDb = useCallback(async () => {
        if (!path) {
            return handleError?.("No path provided");
        }
        const options = {
            indexBy: "id",
            create: true,
            type: "keyvalue",
            overwrite: false,
            ...opts,
            accessController: {
                ...(opts.create && opts.public
                    ? { write: ["*"], admin: ["*"] }
                    : { write: [orbit.identity.id] }),
            },
        };
        let address = String(path);
        if (!address.startsWith("/orbitdb/")) {
            address = await orbit.determineAddress(path, options.type, options);
        }
        return orbit.open(address, options);
    }, [opts, orbit, path, handleError]);

    const refreshDb = useCallback(
        async (db) => {
            await db.load().catch(handleError);
            if (orbitDb) return;
            setDb(db);
            if (db.type === "keyvalue") {
                setRecords({ ...(db.all || {}) });
            } else if (db.type === "eventlog") {
                const allEvents = await db
                    .iterator({ limit: -1 })
                    .collect()
                    .map((e) => e.payload.value);
                setRecords([...allEvents] || []);
            } else if (db.type === "docstore") {
                setRecords(db.query(() => true));
            } else if (db.type === "counter") {
                setRecords(db.value);
            }
        },
        [handleError, orbitDb],
    );

    const refresh = useCallback(() => {
        return openDb().then((db) => registerEvents(db, refreshDb));
    }, [openDb, refreshDb]);

    useEffect(() => {
        if (orbit && !orbitDb) {
            refresh();
        }
        return () => {
            // if (orbitDb && !orbitDb.closed) {
            //     orbitDb.close();
            // }
        };
    }, [orbit, orbitDb, refresh]);

    return { orbit, db: orbitDb, records, refresh };
};
