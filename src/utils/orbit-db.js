import OrbitDB from "orbit-db";
import { create } from "ipfs";
import { CONFIG } from "src/config";
import { PersistedKeystore } from "./keystore";

export const ORBIT = {
    INSTANCE: undefined,
};

/**
 * Creates a new identity.
 * @param {string} id
 * @param {string} key
 * @returns {Promise<{id: string, publicKey: string}>}
 */
export const createIdentity = async (id, key) => {
    const orbitId = await OrbitDB.Identities.createIdentity({
        id,
        keystore: new PersistedKeystore(key),
    });

    if (orbitId.id !== id) {
        throw new Error(`Identity ID mismatch: ${orbitId.id} !== ${id}`);
    }
    return orbitId;
};

/**
 * Creates an OrbitDB instance or returns the existing one.
 * @returns {Promise<OrbitDB>} The OrbitDB instance.
 */
export const createInstance = async () => {
    if (ORBIT.INSTANCE === undefined) {
        const ipfs = await create();
        ORBIT.INSTANCE = await OrbitDB.createInstance(ipfs, {
            identity: await createIdentity(
                CONFIG.ORBIT.IDENTITY.ID,
                CONFIG.ORBIT.IDENTITY.KEY,
            ),
        });
    }
    return ORBIT.INSTANCE;
};

/**
 * Opens a database or creates a new one if it doesn't exist.
 *
 * @param {string} path
 */
export const openDb = async (path) => {
    const orbit = await createInstance();
    console.log("orbit", orbit.identity.id);
    return orbit.docs(path, {
        create: true,
        accessController: {
            write: [orbit.identity.id, orbit.identity.publicKey],
        },
    });
};
