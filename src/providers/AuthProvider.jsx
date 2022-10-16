import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { Disclaimer } from "src/components";
import { wagmiClient, chains } from "src/utils";
import { CONFIG } from "src/config";
import "@rainbow-me/rainbowkit/styles.css";

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
            theme={darkTheme({
                accentColor: CONFIG.THEME.DEFAULT_COLOR,
                accentColorForeground: "white",
                fontStack: CONFIG.THEME.DEFAULT_FONT,
                overlayBlur: "small",
            })}
        >
            {children}
        </RainbowKitProvider>
    </WagmiConfig>
);

export default AuthProvider;
