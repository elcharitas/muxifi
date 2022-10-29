import { chain } from "wagmi";

const bnbChain = {
    id: 96,
    name: "Binance Testnet",
    network: "bnbt",
    nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
    },
    rpcUrls: {
        default: "",
        public: "",
    },
    testnet: true,
};

/** @type {import('wagmi').Chain[]} */
const SUPPORTED_CHAINS = [bnbChain, chain.polygonMumbai];

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
