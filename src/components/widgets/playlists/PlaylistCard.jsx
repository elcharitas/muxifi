import { useTranslation } from "next-i18next";
import { Box, Typography } from "@mui/material";
import { Button } from "src/components/Button";
import { ImgStyle, RootWidgetStyle } from "src/components/styles";
import PlayListImg from "src/assets/img/trial2.png";

export const PlaylistCard = ({ title }) => {
    const { t } = useTranslation("playlist");
    return (
        <RootWidgetStyle
            sx={{
                width: { xs: "100%", md: "min-content" },
                get maxWidth() {
                    return this.width;
                },
                justifyContent: "center",
            }}
        >
            <Box>
                <ImgStyle
                    $src={PlayListImg}
                    sx={{ mb: 1, width: { xs: 250, md: 200 } }}
                    fullWidth
                />
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <Typography variant="body">{title}</Typography>
                </Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2">{t("common:lorem")}</Typography>
                    <Button
                        sx={{
                            borderRadius: 1,
                            color: "white",
                        }}
                        variant="text"
                    >
                        + {t("collect")}.
                    </Button>
                </Box>
            </Box>
        </RootWidgetStyle>
    );
};
