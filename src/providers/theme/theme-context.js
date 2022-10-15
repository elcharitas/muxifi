import { createTheme } from "@mui/material";
import { CONFIG } from "src/config";

export const theme = createTheme({
    palette: {
        mode: CONFIG.THEME.DEFAULT_THEME,
        primary: {
            main: CONFIG.THEME.DEFAULT_COLOR,
        },
        background: {
            default: CONFIG.THEME.DEFAULT_THEME === "dark" ? "#010C07" : "#fff",
        },
    },
    typography: {
        fontFamily: CONFIG.THEME.DEFAULT_FONT,
    },
});
