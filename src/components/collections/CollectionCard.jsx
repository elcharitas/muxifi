import { Grid, Typography } from "@mui/material";
// import { PlayButton } from "src/components/ControlButton";

export const CollectionCard = ({ title, sx }) => {
    return (
        <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            sx={{
                backgroundColor: "#9747FF",
                borderRadius: "12px",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                minHeight: 250,
                ...sx,
            }}
        >
            <Typography variant="modal-title">{title}
            </Typography>
            <Typography
                sx={{ fontSize: "16.67px", fontWeight: 500 }}
            >125 Liked Songs
            </Typography>

            {/* <div className="root-btn">
                <PlayButton onClick={handlePlay} />
            </div> */}
        </Grid>
    );
};
