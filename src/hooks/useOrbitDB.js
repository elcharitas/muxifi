import { useEffect, useState, useContext } from "react";
import { orbit as orbitContext } from "src/providers/orbitdb/orbit-context";

const createDb = async (path, orbit, orbitDb, opts, refreshDb) => {
    const options = {
        indexBy: "id",
        create: true,
        type: "keyvalue",
        overwrite: false,
        ...opts,
        accessController: {
            ...(opts.create && opts.public
                ? { write: ["*"], admin: ["*"] }
                : { write: [orbitDb.identity.id] }),
        },
    };
    const dbAddress = await orbit.determineAddress(path, options.type, options);

    const db = await orbit.open(dbAddress, options);

    db.events.on("replicate", () => {
        // refreshDb();
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

const useOrbitDb = (path, opts = {}) => {
    const orbit = useContext(orbitContext);
    const [records, setRecords] = useState(null);
    const [orbitDb, setDb] = useState(null);

    useEffect(() => {
        if (!path) {
            throw new Error("Database Path is required!");
        }

        const refreshDb = async (db) => {
            await db.load();
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
            createDb(path, orbit, orbitDb, opts, refreshDb);
        }
        return () => {
            if (orbitDb) {
                orbitDb.close();
            }
        };
    }, [orbit, path, opts, orbitDb]);

    const state = { orbit, db: orbitDb, records };
    if (orbitDb && orbitDb.type === "counter") {
        state.inc = orbitDb.inc.bind(orbitDb);
        state.value = orbitDb.value;
    }
    return state;
};

export default useOrbitDb;
