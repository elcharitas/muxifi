import { appWithTranslation } from "next-i18next";
import { AuthProvider, ThemeProvider, StoreProvider } from "src/providers";

const MuxiApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <StoreProvider>
                    <Component {...pageProps} />
                </StoreProvider>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default appWithTranslation(MuxiApp);
