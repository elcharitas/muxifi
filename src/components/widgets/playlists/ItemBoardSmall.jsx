import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { PlayButton } from "src/components/ControlButton";

export const ItemBoardSmall = ({
    name,
    artiste,
    image,
    isPlaying,
    handlePlay,
}) => {
    return (
        <Box
            sx={{
                backgroundColor: "#010604",
                display: "flex",
                padding: "12px 36px",
                "&:hover": { backgroundColor: "#010C07" },
            }}
        >
            <Box sx={{ display: "flex", width: "70%" }}>
                <Box sx={{ marginRight: "19px", width: 48, height: 48 }}>
                    <Image
                        src={image || "/images/icon.svg"}
                        alt="image"
                        layout="fixed"
                        {...(!image && {
                            width: "50px",
                            height: "50px",
                        })}
                    />
                </Box>

                <span>
                    <Typography variant="hero-subtitle" sx={{ fontSize: 20 }}>
                        {name}
                    </Typography>
                    <Typography variant="body2">{artiste}</Typography>
                </span>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <PlayButton onClick={handlePlay} isPlaying={isPlaying} />
            </Box>
        </Box>
    );
};
