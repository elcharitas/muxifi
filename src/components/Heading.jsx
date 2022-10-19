import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";

const fontTheme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "h4",
                    },
                    style: {
                        fontSize: 49,
                        fontWeight: 700,
                    },
                },
                {
                    props: {
                        variant: "h6",
                    },
                    style: {
                        fontSize: 34,
                        fontWeight: 500,
                    },
                },
            ],
        },
    },
});

export const Heading = ({ title, size }) => {
    return (
        <Box sx={{ mt: 0 }}>
            <ThemeProvider theme={fontTheme}>
                <Typography variant={size} sx={{ color: "tertiary.main", marginBottom: "24px" }}>
                    {title}
                </Typography>
            </ThemeProvider>
        </Box>
    );
};
