import { Box, styled, Typography } from "@mui/material";
import { Button } from "src/components/Button";
import MusicIcon from "src/assets/svgs/music-icon.svg";
import EditIcon from "src/assets/svgs/edit-icon.svg";
import BinanceIcon from "src/assets/svgs/binance-icon.svg";
import Dots from "src/assets/svgs/dots.svg";
import { useState } from "react";
import { BasicModal } from "src/layouts/app/Modal";

const GridContainer = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",

    position: "relative",
    height: 360,
    background: "#010C07",
    cursor: "pointer",
});

const GridItemOne = styled("div")({
    position: "absolute",
    left: "36px",
    top: "72px",
});

const GridItemTwo = styled("div")({
    gridColumn: "5 / span 7",
    gridRow: "3 / span 3",
    paddingLeft: 72,
});

const GridItemThree = styled("div")({
    gridColumn: "11 / span 2",
    gridRow: "2 / span 1",
});

const Text = styled("p")(({ theme }) => ({
    fontSize: 16.7,
    color: theme.palette.tertiary.light,
    marginRight: 24,
}));

export const CreaterPlaylistheader = () => {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = () => setIsHover(true);
    const onMouseLeave = () => setIsHover(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <GridContainer onClick={handleOpen}>
                <BasicModal onClose={handleClose} open={open} />
                <GridItemOne onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {isHover ? <EditIcon /> : <MusicIcon />}
                </GridItemOne>

                <GridItemTwo>
                    <Typography variant="hero-subtitle" sx={{ fontSize: 20 }}>Owner</Typography>
                    <Typography variant="h3" sx={{ fontSize: 60, fontWeight: 700 }}>Playlist Name</Typography>
                    <Text
                        sx={{
                            color: "tertiary.main",
                            marginBottom: "3px",
                        }}
                    >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </Text>

                    <Box sx={{ display: "flex" }}>
                        <Text>3 Songs</Text>
                        <Text>16 mins 12 Secs</Text>

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <span>
                                <BinanceIcon />
                            </span>
                            <Text>12</Text>
                        </Box>
                    </Box>
                </GridItemTwo>

                <GridItemThree>
                    <Button
                        sx={{
                            backgroundColor: "background.default",
                            color: "tertiary.light",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderColor: "tertiary.light",
                            "&:hover": {
                                border: "none",
                                color: "tertiary.dark",
                                // FIXME: enure to remove this
                            },
                        }}
                    >
                    + Collect Playlist
                    </Button>
                </GridItemThree>
            </GridContainer>

            <Box
                sx={{
                    height: 270,
                    padding: "66px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                }}
            >
                <Dots />
            </Box>
        </Box>
    );
};
