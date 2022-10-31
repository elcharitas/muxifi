import { Box, Typography } from "@mui/material";
import { PlayButton } from "src/components/ControlButton";
import { RootWidgetStyle } from "../styles";

export const CollectionCard = ({ title, sx }) => {
    return (
        <RootWidgetStyle
            sx={{
                backgroundColor: "#9747FF",
                justifyContent: "space-between",
                alignItems: "flex-end",
                minHeight: 250,
                minWidth: { xs: "100%", md: 500 },
                ...sx,
            }}
        >
            <Box
                sx={{
                    mb: 4,
                }}
            >
                <Typography variant="modal-title">{title}</Typography>
                <Typography sx={{ fontWeight: 500 }}>
                    125 Liked Songs
                </Typography>
            </Box>
            <div className="root-btn">
                <PlayButton />
            </div>
        </RootWidgetStyle>
    );
};
