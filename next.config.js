const { default: Moralis } = require("moralis");
const { i18n } = require("./next-i18next.config");

// calling this without having the key may lead to undesired effects
if (process.env.NEXT_PUBLIC_MORALIS_API_KEY) {
    Moralis.start({
        apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
    });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n,
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

module.exports = nextConfig;
