export const APP_CONFIG = {
    NAME: "Muxify",
    VERSION: "0.1.0",
    DESCRIPTION: "Muxify is a music player for the web",
    COLLECTIONS: ["albums", "artistes", "podcasts", "playlists"],
    URL: `http${process.env.VERCEL_ENV !== "development" && "s"}://${
        process.env.VERCEL_URL
    }`,
    SOCIAL: {
        MESSAGE:
            "https://docs.google.com/forms/d/e/1FAIpQLSdE2W2xfDEDQbWJ6KJGr6vrjSHCSg8Dg1BOqvYxlPb78CW3Jw/viewform",
        TWITTER: "https://twitter.com/",
        GITHUB: "https://github.com/elcharitas/muxifi",
    },
};
