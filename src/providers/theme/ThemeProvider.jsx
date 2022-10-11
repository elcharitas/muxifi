import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./theme-context";

export const ThemeProvider = ({ children }) => (
    <MUIThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
    </MUIThemeProvider>
);
