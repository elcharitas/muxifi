export const ORBIT_CONFIG = {
    PATHS: process.env.ORBITDB_PATHS?.split(",") || [],
    IDENTITY: {
        ID: process.env.ORBITDB_IDENTITY_ID,
        KEY: process.env.ORBITDB_IDENTITY_KEY,
    },
    get DEFAULT_PATH() {
        return this.PATHS[0];
    },
};
