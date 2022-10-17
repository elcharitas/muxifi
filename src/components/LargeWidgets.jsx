import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Img from "src/temps/trial2.png";
import { Box, Typography } from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "h4",
                    },
                    style: {
                        fontSize: 24,
                        fontWeight: 700,
                    },
                },
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 16,
                        fontWeight: 500,
                        marginTop: 3,
                    },
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 14,
                        fontWeight: 700,
                        marginTop: 12,
                    },
                },
            ],
        },
    },
});

const RootStyle = styled(Box)({
    width: 241,
    // height: 120,
    marginTop: 80,
    borderRadius: 12,
    alignItems: "center",
    padding: 19,
    backgroundColor: "orange",
});

const LargeWidgets = () => {
    return (
        <RootStyle>
            <ThemeProvider theme={theme}>
                <Image
                    alt=""
                    src={Img}
                    width="202"
                    height="202"
                    marginBottom="24"
                />
                <Box>
                    <Typography variant="h4" component="h6">P heading</Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <Typography variant="body3" component="p">+ Collect Playlist.</Typography>
                </Box>
            </ThemeProvider>
        </RootStyle>
    );
};

export default LargeWidgets;
