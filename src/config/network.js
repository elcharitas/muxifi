import { chain } from "wagmi";

const bnbChain = {
    id: 56,
    name: "Binance Smart Chain",
    network: "bnb",
    nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
    },
    rpcUrls: {
        default: "https://bsc-dataseed.binance.org/",
        public: "https://bsc-dataseed.binance.org/",
    },
    blockExplorers: {
        bscscan: "https://bscscan.com/",
    },
};

/** @type {import('wagmi').Chain[]} */
const SUPPORTED_CHAINS = [bnbChain, chain.mainnet];

const CONTRACT_ADDRESSES = {
    MUXIFY: process.env.NEXT_PUBLIC_MUXIFI_ADDRESS,
    ARTISTE: process.env.NEXT_PUBLIC_MUXIFI_CREATOR_ADDRESS,
    ALBUM: process.env.NEXT_PUBLIC_MUXIFI_ALBUM_ADDRESS,
    PODCAST: process.env.NEXT_PUBLIC_MUXIFI_PODCAST_ADDRESS,
    MARKET: process.env.NEXT_PUBLIC_MUXIFI_MARKET_ADDRESS,
};

export const WAGMI_CONFIG = {
    CONTRACT_ADDRESSES,
    ALCHEMY_ID: process.env.ALCHEMY_ID,
    SUPPORTED_CHAINS,
    UNSTOPPABLE_ID: process.env.NEXT_PUBLIC_UNSTOPPABLE_ID,
    get DEFAULT_CHAIN() {
        return SUPPORTED_CHAINS[0];
    },
    NFT_STORAGE: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY,
};
