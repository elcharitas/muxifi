import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { RootWidgetStyle } from "src/components/styles";
import Img from "src/assets/img/trial2.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const TypoTheme = createTheme({
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

export const PlaylistCard = ({ title }) => (
    <RootWidgetStyle>
        <ThemeProvider theme={TypoTheme}>
            <Box>
                <Image
                    alt={title}
                    src={Img}
                    width={202}
                    height={202}
                    marginBottom={24}
                />
                <Box>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Typography variant="body3" component="p">
                    + Collect Playlist.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    </RootWidgetStyle>
);
