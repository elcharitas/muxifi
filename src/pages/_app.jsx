import { AuthProvider, ThemeProvider } from "src/providers";

const MuxiApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <style>{`
                    [data-rk]{
                        --rk-fonts-body: "Raleway", sans-serif !important;
                    }
                `}</style>
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    );
};

export default MuxiApp;
