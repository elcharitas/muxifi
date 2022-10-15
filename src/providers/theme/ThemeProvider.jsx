import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./theme-context";
import "@fontsource/raleway";

const ThemeProvider = ({ children }) => (
    <MUIThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
    </MUIThemeProvider>
);

export default ThemeProvider;
