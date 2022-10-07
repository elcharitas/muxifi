import { chain } from "wagmi";

/** @type {import('wagmi').Chain[]} */
const SUPPORTED_CHAINS = [chain.mainnet, chain.polygon, chain.bsc];

export const WAGMI_CONFIG = {
    ALCHEMY_ID: process.env.ALCHEMY_ID,
    SUPPORTED_CHAINS,
};
