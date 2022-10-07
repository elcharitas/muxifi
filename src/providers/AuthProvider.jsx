import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { Disclaimer } from "src/components";
import { wagmiClient, chains } from "src/utils";
import { CONFIG } from "src/config";

const AuthProvider = ({ children }) => (
    <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
            chains={chains}
            initialChain={CONFIG.WAGMI.DEFAULT_CHAIN}
            modalSize="compact"
            appInfo={{
                appName: CONFIG.APP.NAME,
                disclaimer: Disclaimer,
            }}
        >
            {children}
        </RainbowKitProvider>
    </WagmiConfig>
);

export default AuthProvider;
