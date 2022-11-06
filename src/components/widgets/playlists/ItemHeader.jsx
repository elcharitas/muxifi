import { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import { Button } from "src/components/Button";
import { ItemModal } from "src/components/widgets/playlists/ItemModal";
import { IconBox } from "src/components/styles";
import { formatAddress } from "src/utils";

import EditIcon from "src/assets/svgs/edit-icon.svg";
import BinanceIcon from "src/assets/svgs/binance-icon.svg";
import NoteIcon from "src/assets/svgs/note-icon.svg";
import { useAccount } from "wagmi";

const GridContainer = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",

    position: "relative",
    height: 360,
    background: "#010C07",
    cursor: "pointer",
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

export const ItemHeader = ({ collection, handleSave }) => {
    const { address } = useAccount();
    const isOwner = collection.address === address;
    const [open, setOpen] = useState(false);
    const handleModal = () => {
        if (!isOwner) return;
        setOpen((prev) => !prev);
    };

    return (
        <Box>
            <GridContainer
                sx={{ cursor: isOwner ? "pointer" : "default" }}
                onClick={handleModal}
            >
                <IconBox
                    sx={{
                        position: "absolute",
                        left: "36px",
                        top: "72px",
                        "svg:first-of-type": {
                            display: "block",
                        },
                        ...(isOwner && {
                            "svg:last-child": {
                                display: "none",
                            },
                            "&:hover": {
                                "svg:first-of-type": {
                                    display: "none",
                                },
                                "svg:last-child": {
                                    display: "block",
                                },
                            },
                        }),
                    }}
                >
                    <NoteIcon />
                    {isOwner && <EditIcon />}
                </IconBox>

                <GridItemTwo>
                    <Typography variant="hero-subtitle" sx={{ fontSize: 20 }}>
                        {formatAddress(collection.address)}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontSize: 60, fontWeight: 700 }}
                    >
                        {collection.title}
                    </Typography>
                    <Text
                        sx={{
                            color: "tertiary.main",
                            marginBottom: "3px",
                        }}
                    >
                        {collection.description}
                    </Text>

                    <Box sx={{ display: "flex" }}>
                        <Text>3 Songs</Text>
                        <Text>16 mins 12 Secs</Text>

                        {collection.price && (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <span>
                                    <BinanceIcon />
                                </span>
                                <Text>{collection.price}</Text>
                            </Box>
                        )}
                    </Box>
                </GridItemTwo>

                <GridItemThree>
                    {!isOwner && !!address && (
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
                                },
                            }}
                        >
                            + Collect Playlist
                        </Button>
                    )}
                </GridItemThree>
            </GridContainer>
            <ItemModal
                open={open}
                onClose={handleModal}
                collection={collection}
                handleSave={handleSave}
            />
        </Box>
    );
};
