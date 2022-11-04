import { useEffect, useState, useContext } from "react";
import { orbit as orbitContext } from "src/providers/orbitdb/orbit-context";

const createDb = async (path, orbit, opts, refreshDb) => {
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
    const dbAddress = await Promise.resolve(
        path.split("/").length === 1
            ? orbit.determineAddress(path, options.type, options)
            : path,
    );

    const db = await orbit.open(dbAddress, options);

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

    useEffect(() => {
        if (!path) {
            return handleError?.("No path provided");
        }

        const refreshDb = async (db) => {
            await db.sync().catch(() => null);
            await db.load().catch(() => null);
            if (!orbitDb) {
                setDb(db);
            }
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
        };
        if (orbit && !orbitDb) {
            createDb(path, orbit, opts, refreshDb);
        }
        return () => {
            // if (orbitDb && !orbitDb.closed) {
            //     orbitDb.close();
            // }
        };
    }, [orbit, path, opts, orbitDb, handleError]);

    return { orbit, db: orbitDb, records };
};
