export const ORBIT_CONFIG = {
    PATHS: process.env.NEXT_PUBLIC_ORBITDB_PATHS?.split(",") || [],
    IDENTITY: {
        ID: process.env.NEXT_PUBLIC_ORBITDB_IDENTITY_ID,
        KEY: process.env.NEXT_PUBLIC_ORBITDB_IDENTITY_KEY,
    },
    get DEFAULT_PATH() {
        return this.PATHS[0] || "muxifi";
    },
    get SONGS_PATH() {
        return this.PATHS[1] || "muxifi_songs";
    },
};
