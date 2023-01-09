import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
    metaMaskWallet,
    rainbowWallet,
    walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { CONFIG } from "src/config";
import { udWallet } from "./udWallet";

const { ALCHEMY_ID, SUPPORTED_CHAINS } = CONFIG.WAGMI;

export const { chains, provider } = configureChains(SUPPORTED_CHAINS, [
    alchemyProvider({ alchemyId: ALCHEMY_ID }),
    publicProvider(),
]);

const connectors = connectorsForWallets([
    {
        groupName: "Recommended",
        wallets: [rainbowWallet({ chains }), metaMaskWallet({ chains })],
    },
    {
        groupName: "Others",
        wallets: [udWallet(), walletConnectWallet({ chains })],
    },
]);

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

export const formatAddress = (address) => {
    if (!address?.startsWith("0x")) return address;
    const endAddr = address.substring(address.length - 4);
    return (
        typeof address === "string" && `${address.substring(0, 6)}...${endAddr}`
    );
};
