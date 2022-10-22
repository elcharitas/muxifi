import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./theme-context";

const ThemeProvider = ({ children }) => (
    <MUIThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
    </MUIThemeProvider>
);

export default ThemeProvider;
