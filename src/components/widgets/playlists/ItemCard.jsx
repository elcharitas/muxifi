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
    type,
    desc,
    image,
    handlePlay,
    owner,
    sx,
}) => {
    const { address } = useAccount();
    const { t } = useTranslation("playlist");
    const { dispatch } = useControl();
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
            href={type ? `/app/${type}/${id}` : undefined}
        >
            <Box>
                <ImgStyle
                    $src={image || "/images/icon.svg"}
                    sx={{
                        mb: 1,
                        width: { xs: 250, md: 200, ...sx },
                        ...(image && { backgroundSize: "cover" }),
                    }}
                >
                    {handlePlay !== false && (
                        <div className="root-btn">
                            <PlayButton
                                onClick={() => {
                                    dispatch({
                                        id:
                                            type === "albums"
                                                ? id.replace("0x", "")
                                                : id,
                                        type: type.replace(/s$/, ""),
                                    });
                                }}
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
