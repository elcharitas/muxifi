import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { CONFIG } from "src/config";

const { ALCHEMY_ID, SUPPORTED_CHAINS } = CONFIG.WAGMI;

export const { chains, provider } = configureChains(SUPPORTED_CHAINS, [
    alchemyProvider({ alchemyId: ALCHEMY_ID }),
    publicProvider(),
]);

export const { connectors } = getDefaultWallets({
    appName: CONFIG.APP.NAME,
    chains,
});

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

export const formatAddress = (address) => {
    return (
        address
        && `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
    );
};
