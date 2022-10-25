import React from "react";
import { Button } from "src/components/Button";
import PlaylistImg from "src/assets/img/playListImg.png";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

export const PlaylistSmallCards = () => {
    return (
        <Paper sx={{ border: "0.5px solid #2B3530", backgroundColor: "#010604", display: "flex", padding: "12px 36px", "&:hover": { backgroundColor: "#010C07" } }}>
            <Box sx={{ display: "flex", width: "70%" }}>
                <Box sx={{ marginRight: "19px", width: 48, height: 48 }}>
                    <Image src={PlaylistImg} alt="image" layout="fixed" />
                </Box>

                <span>
                    <Typography variant="hero-subtitle" sx={{ fontSize: 20 }}>Song Name</Typography>
                    <Typography variant="body2">Artists</Typography>
                </span>
            </Box>

            <Box sx={{ display: "flex", width: "50%", justifyContent: "space-between", alignItems: "center" }}>
                <p>Album Name</p>

                <div>
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
                                + Add
                    </Button>
                </div>
            </Box>
        </Paper>
    );
};
