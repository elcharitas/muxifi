import { CONFIG } from "src/config";
import { AuthProvider, ThemeProvider } from "src/providers";

const MuxiApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <style>{`[data-rk]{ --rk-fonts-body: "${CONFIG.THEME.DEFAULT_FONT}, sans-serif !important;}`}</style>
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    );
};

export default MuxiApp;
