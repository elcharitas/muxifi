import { AuthProvider, ThemeProvider } from "src/providers";

const MuxiApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    );
};

export default MuxiApp;
