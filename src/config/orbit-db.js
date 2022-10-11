export const ORBIT_CONFIG = {
    PATHS: process.env.ORBITDB_PATHS?.split(","),
    IDENTITY: {
        ID: process.env.ORBITDB_IDENTITY_ID,
        PUBLIC_KEY: process.env.ORBITDB_IDENTITY_PUBLIC_KEY,
        TYPE: process.env.ORBITDB_IDENTITY_TYPE || "orbitdb",
    },
};
