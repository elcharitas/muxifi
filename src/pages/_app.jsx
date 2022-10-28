import { appWithTranslation } from "next-i18next";
import { AuthProvider, OrbitDBProvider, ThemeProvider } from "src/providers";

const MuxiApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <OrbitDBProvider>
                    <Component {...pageProps} />
                </OrbitDBProvider>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default appWithTranslation(MuxiApp);
