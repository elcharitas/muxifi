import NextProgress from "next-progress";
import { appWithTranslation } from "next-i18next";
import {
    AuthProvider,
    OrbitDBProvider,
    SupabaseProvider,
    ThemeProvider,
} from "src/providers";
import { CONFIG } from "src/config";
import { Toaster } from "react-hot-toast";
import { GlobalScrollbar } from "mac-scrollbar";
import "mac-scrollbar/dist/mac-scrollbar.css";
import { theme } from "src/providers/theme/theme-context";

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
                    <SupabaseProvider>
                        <Component {...pageProps} />
                    </SupabaseProvider>
                </OrbitDBProvider>
            </AuthProvider>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    className: "",
                    style: {
                        border: `1px solid ${theme.palette.border.main}`,
                        padding: "16px",
                        color: theme.palette.secondary.main,
                        background: theme.palette.background.paper,
                        fontFamily: CONFIG.THEME.DEFAULT_FONT,
                    },
                }}
            />
        </ThemeProvider>
    );
};

export default appWithTranslation(MuxiApp);
