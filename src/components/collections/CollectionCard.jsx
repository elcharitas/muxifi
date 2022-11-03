import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { PlayButton } from "src/components/ControlButton";
import { RootWidgetStyle } from "../styles";

export const CollectionCard = ({ title, sx, liked = 25 }) => {
    const { t } = useTranslation();
    return (
        <RootWidgetStyle
            sx={{
                display: "block",
                backgroundColor: "#9747FF",
                minHeight: 250,
                minWidth: { xs: "100%", md: 500 },
                ...sx,
            }}
            stackProps={{
                sx: {
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                },
            }}
            href="/app"
        >
            <Box>
                <Typography variant="modal-title">{title}</Typography>
                <Typography sx={{ fontWeight: 500 }}>
                    {liked} {t("liked")}
                </Typography>
            </Box>
            <div className="root-btn">
                <PlayButton />
            </div>
        </RootWidgetStyle>
    );
};
