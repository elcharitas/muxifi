import NextProgress from "next-progress";
import { appWithTranslation } from "next-i18next";
import { AuthProvider, OrbitDBProvider, ThemeProvider } from "src/providers";
import { CONFIG } from "src/config";

const MuxiApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <NextProgress
                delay={300}
                options={{ showSpinner: false }}
                color={CONFIG.THEME.DEFAULT_COLOR}
            />
            <AuthProvider>
                <OrbitDBProvider>
                    <Component {...pageProps} />
                </OrbitDBProvider>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default appWithTranslation(MuxiApp);
