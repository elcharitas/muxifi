import { chain } from "wagmi";

/** @type {import('wagmi').Chain[]} */
const SUPPORTED_CHAINS = [chain.goerli, chain.polygon];

const CONTRACT_ADDRESSES = {
    main: process.env.MUXIFI_ADDRESS,
    creator: process.env.MUXIFI_CREATOR_ADDRESS,
    playlist: process.env.MUXIFI_ALBUM_ADDRESS,
    market: process.env.MUXIFI_MARKET_ADDRESS,
};

export const WAGMI_CONFIG = {
    CONTRACT_ADDRESSES,
    ALCHEMY_ID: process.env.ALCHEMY_ID,
    SUPPORTED_CHAINS,
    get DEFAULT_CHAIN() {
        return SUPPORTED_CHAINS[0];
    },
};
