import Moralis from "moralis";
import NextProgress from "next-progress";
import { appWithTranslation } from "next-i18next";
import { AuthProvider, OrbitDBProvider, ThemeProvider } from "src/providers";
import { CONFIG } from "src/config";
import { GlobalScrollbar } from "mac-scrollbar";
import "mac-scrollbar/dist/mac-scrollbar.css";

// calling this without having the key may lead to undesired effects
if (process.env.NEXT_PUBLIC_MORALIS_API_KEY) {
    Moralis.start({
        apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
        defaultEvmApiChain: CONFIG.WAGMI.DEFAULT_CHAIN.id,
    });
}

const MuxiApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <NextProgress
                delay={300}
                options={{ showSpinner: false }}
                color={CONFIG.THEME.DEFAULT_COLOR}
            />
            <GlobalScrollbar skin={CONFIG.THEME.DEFAULT_THEME} />;
            <AuthProvider>
                <OrbitDBProvider>
                    <Component {...pageProps} />
                </OrbitDBProvider>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default appWithTranslation(MuxiApp);
