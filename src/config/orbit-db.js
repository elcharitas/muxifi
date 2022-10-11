export const ORBIT_CONFIG = {
    DB_PATH: process.env.ORBITDB_PATH,
    IDENTITY: {
        ID: process.env.ORBITDB_IDENTITY_ID,
        PUBLIC_KEY: process.env.ORBITDB_IDENTITY_PUBLIC_KEY,
        TYPE: process.env.ORBITDB_IDENTITY_TYPE || "orbitdb",
    },
};
