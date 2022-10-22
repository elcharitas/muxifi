import { createTheme } from "@mui/material";
import { CONFIG } from "src/config";

export const theme = createTheme({
    palette: {
        mode: CONFIG.THEME.DEFAULT_THEME,
        primary: {
            main: "#F5820D",
            dark: CONFIG.THEME.DEFAULT_COLOR,
        },
        secondary: {
            main: "#2B3530",
        },
        background: {
            default: "#000402",
            paper: "#010A06",
        },
        gradients: {
            primary:
                "linear-gradient(114.41deg, #F5820D 14.86%, #5E0A0A 94.57%)",
            background: "linear-gradient(180deg, #565D5A 0%, #010A06 100%)",
        },
        border: {
            main: "rgba(255, 255, 255, 0.12)",
        },
        tertiary: {
            light: "#CCCECD",
            main: "#565D5A",
            dark: "#3C3F3D",
        },
    },
    typography: {
        fontFamily: CONFIG.THEME.DEFAULT_FONT,
    },
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "h5",
                    },
                    style: {
                        fontSize: 18,
                        fontWeight: 700,
                    },
                },
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 14,
                        fontWeight: 500,
                        marginTop: 3,
                        color: "#565D5A",
                    },
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 13,
                        fontWeight: 700,
                        marginTop: 12,
                    },
                },
                {
                    props: {
                        variant: "hero-title",
                    },
                    style: {
                        fontSize: 26,
                        fontWeight: 900,
                    },
                },
                {
                    props: {
                        variant: "hero-subtitle",
                    },
                    style: {
                        fontSize: 22,
                        fontWeight: 700,
                    },
                },
            ],
        },
    },
});
