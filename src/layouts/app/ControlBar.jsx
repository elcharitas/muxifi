import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, Typography, Slider } from "@mui/material";
import { useControl } from "src/hooks";
import { ControlButton, PlayButton, Stackable } from "src/components";
import { ImgStyle } from "src/components/styles";
import CoverImg from "src/assets/img/cover.png";
import { CONFIG } from "src/config";

const RootStyle = styled(AppBar)(() => ({
    boxShadow: "none",
    backgroundColor: "transparent",
    backgroundImage: "none",
    position: "fixed",
    top: "auto",
    bottom: 0,
    zIndex: 9999,
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: 100,
    backgroundColor: theme.palette.background.default,
    borderTop: `1px dashed ${theme.palette.border.main}`,
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
        minHeight: 120,
        padding: theme.spacing(0, 5),
    },
}));

const ControlBar = () => {
    const { track, ready } = useControl();
    return (
        ready && (
            <RootStyle>
                <ImgStyle
                    $src={CoverImg}
                    sx={{
                        borderRadius: 0,
                        width: CONFIG.UI.APP_SIDEBAR_WIDTH,
                        height: CONFIG.UI.APP_SIDEBAR_WIDTH,
                    }}
                />
                <ToolbarStyle>
                    <Stackable sx={{ display: { xs: "none", md: "flex" } }}>
                        <Box sx={{ mr: 4 }}>
                            <Typography variant="h5">{track.name}</Typography>
                            <Typography variant="body2">
                                {track.artiste.name}
                            </Typography>
                        </Box>
                        <ControlButton icon="heart" />
                    </Stackable>

                    <Box>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={{ xs: 0.5, sm: 1.5 }}
                        >
                            <ControlButton icon="shuffle" />
                            <ControlButton icon="prev" />
                            <PlayButton />
                            <ControlButton icon="next" />
                            <ControlButton icon="repeat" />
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={{ xs: 0.5, sm: 1.5 }}
                        >
                            <Typography variant="body2">0:0</Typography>
                            <Slider
                                defaultValue={track.position}
                                aria-label="Disabled slider"
                                sx={{
                                    width: 350,
                                    "& .MuiSlider-thumb": {
                                        width: "15px",
                                        height: "15px",
                                    },
                                }}
                                color="secondary"
                            />
                            <Typography variant="body2">0:0</Typography>
                        </Stack>
                    </Box>

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={{ xs: 0.5, sm: 1.5 }}
                    >
                        <ControlButton icon="queue" />
                        <ControlButton icon="volume" />
                        <Slider
                            defaultValue={30}
                            aria-label="Disabled slider"
                            sx={{
                                width: 100,
                                "& .MuiSlider-thumb": {
                                    width: "15px",
                                    height: "15px",
                                },
                            }}
                            color="secondary"
                        />
                    </Stack>
                </ToolbarStyle>
            </RootStyle>
        )
    );
};

export default ControlBar;
