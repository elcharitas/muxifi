import { useAccount } from "wagmi";
import { useTranslation } from "next-i18next";
import { Box, Typography } from "@mui/material";
import { Button } from "src/components/Button";
import { ImgStyle, RootWidgetStyle } from "src/components/styles";
import { PlayButton } from "src/components";
import { useControl } from "src/hooks";

export const ItemCard = ({
    id = "",
    title,
    href,
    desc,
    image,
    handlePlay,
    owner,
    sx,
}) => {
    const { address } = useAccount();
    const { t } = useTranslation("playlist");
    const { setTrack } = useControl();
    return (
        <RootWidgetStyle
            sx={{
                width: { xs: "100%", md: "min-content" },
                maxWidth: { xs: "100%", md: "min-content" },
                justifyContent: "center",
                "&:hover": {
                    backgroundColor: "background.hover",
                },
            }}
            href={href}
        >
            <Box>
                <ImgStyle
                    $src={image || "/images/logo.svg"}
                    sx={{ mb: 1, width: { xs: 250, md: 200, ...sx } }}
                >
                    {handlePlay !== false && (
                        <div className="root-btn">
                            <PlayButton
                                onClick={
                                    handlePlay || (() => setTrack("id", id))
                                }
                            />
                        </div>
                    )}
                </ImgStyle>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <Typography variant="body">{title}</Typography>
                </Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2">{desc}</Typography>
                    {owner && owner !== address && !!address && (
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
