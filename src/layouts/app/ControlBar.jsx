import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, Typography, Slider } from "@mui/material";
import { useControl } from "src/hooks";
import { ControlButton, PlayButton, Stackable } from "src/components";
import { ImgStyle } from "src/components/styles";
import { CONFIG } from "src/config";
import { secondsWatch } from "src/utils/formats";

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
    const { track, setTrack, ready, repeat, shuffle, volume } = useControl();
    return (
        ready && (
            <RootStyle>
                {track.image && (
                    <ImgStyle
                        $src={track.image}
                        sx={{
                            borderRadius: 0,
                            width: CONFIG.UI.APP_SIDEBAR_WIDTH,
                            height: CONFIG.UI.APP_SIDEBAR_WIDTH,
                        }}
                    />
                )}
                <ToolbarStyle>
                    <Stackable
                        sx={{
                            display: { xs: "none", md: "flex" },
                            maxWidth: "300px",
                        }}
                    >
                        <Box sx={{ mr: 4 }}>
                            <Typography variant="h5">{track.name}</Typography>
                            <Typography variant="body2">
                                {track.item.name}
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
                            <ControlButton
                                icon="shuffle"
                                color={shuffle ? "primary" : "secondary"}
                                onClick={() => setTrack("shuffle", !shuffle)}
                            />
                            <ControlButton icon="prev" />
                            <PlayButton
                                isPlaying={track.playing}
                                onClick={() => {
                                    setTrack("playing", !track.playing);
                                    track.togglePlayPause();
                                }}
                            />
                            <ControlButton icon="next" />
                            <ControlButton
                                icon="repeat"
                                color={repeat ? "primary" : "secondary"}
                                onClick={() => setTrack("repeat", !repeat)}
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={{ xs: 0.5, sm: 1.5 }}
                        >
                            <Typography variant="body2">
                                {secondsWatch(track.position || 0)}
                            </Typography>
                            <Slider
                                value={track.position}
                                aria-label="Disabled slider"
                                sx={{
                                    width: 350,
                                    "& .MuiSlider-thumb": {
                                        width: "15px",
                                        height: "15px",
                                    },
                                }}
                                color="secondary"
                                onChange={(e) => track.goto(e.target.value)}
                            />
                            <Typography variant="body2">
                                {secondsWatch(track.duration || 0)}
                            </Typography>
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
                            value={volume}
                            aria-label="Disabled slider"
                            sx={{
                                width: 100,
                                "& .MuiSlider-thumb": {
                                    width: "15px",
                                    height: "15px",
                                },
                            }}
                            color="secondary"
                            onChange={(e) => track.volume(e.target.value)}
                        />
                    </Stack>
                </ToolbarStyle>
            </RootStyle>
        )
    );
};

export default ControlBar;
