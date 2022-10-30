import { useTranslation } from "next-i18next";
import { Box, Typography } from "@mui/material";
import { Button } from "src/components/Button";
import { ImgStyle, RootWidgetStyle } from "src/components/styles";
import { PlayButton } from "src/components";

export const PlaylistCard = ({ title, href, desc, image, handlePlay, isCollected, sx }) => {
    const { t } = useTranslation("playlist");
    return (
        <RootWidgetStyle
            sx={{
                width: { xs: "100%", md: "min-content" },
                maxWidth: { xs: "100%", md: "min-content" },
                justifyContent: "center",
            }}
            href={href}
        >
            <Box>
                <ImgStyle
                    $src={image}
                    sx={{ mb: 1, width: { xs: 250, md: 200, ...sx } }}
                >
                    <div className="root-btn">
                        <PlayButton onClick={handlePlay} />
                    </div>
                </ImgStyle>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <Typography variant="body">{title}</Typography>
                </Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2">{desc}</Typography>
                    {!isCollected && (
                        <Button
                            sx={{
                                borderRadius: 1,
                                color: "white",
                            }}
                            variant="text"
                        >
                        + {t("collect")}.
                        </Button>
                    )}

                </Box>
            </Box>
        </RootWidgetStyle>
    );
};
