import { chain } from "wagmi";

/** @type {import('wagmi').Chain[]} */
const SUPPORTED_CHAINS = [chain.goerli, chain.polygon];

export const WAGMI_CONFIG = {
    ALCHEMY_ID: process.env.ALCHEMY_ID,
    SUPPORTED_CHAINS,
    get DEFAULT_CHAIN() {
        return SUPPORTED_CHAINS[0];
    },
};
