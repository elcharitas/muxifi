import OrbitDB from "orbit-db";
import { create } from "ipfs";
import { CONFIG } from "src/config";

export const ORBIT = {
    INSTANCE: undefined,
    IDENTITY: {
        id: CONFIG.ORBIT.IDENTITY.ID,
        publicKey: CONFIG.ORBIT.IDENTITY.PUBLIC_KEY,
        type: CONFIG.ORBIT.IDENTITY.TYPE,
        get signatures() {
            return {
                id: this.id,
                publicKey: this.publicKey,
            };
        },
    },
};

/**
 * Creates a new identity.
 * @param {string} id
 * @returns {Promise<typeof ORBIT.IDENTITY>}
 */
export const createIdentity = async (id) => {
    return await OrbitDB.Identities.createIdentity({ id });
};

/**
 * Creates an OrbitDB instance or returns the existing one.
 * @returns {Promise<OrbitDB>} The OrbitDB instance.
 */
export const createInstance = async () => {
    if (ORBIT.INSTANCE === undefined) {
        const ipfs = await create();
        ORBIT.INSTANCE = await OrbitDB.createInstance(ipfs, {
            identity: ORBIT.IDENTITY,
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
    return await orbit.docs(path, { create: true });
};
