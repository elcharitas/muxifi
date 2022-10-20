import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Box, Grid, Typography } from "@mui/material";
import { RootWidgetStyle } from "src/components/styles";
import Img from "src/assets/img/trial2.png";

export const PlaylistCard = ({ title }) => {
    const { t } = useTranslation("playlist");
    return (
        <Grid item xs={12} sm={6} md={3}>
            <RootWidgetStyle>
                <Box>
                    <Image alt={title} src={Img} width={202} height={202} />
                    <Box>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="body2">
                            {t("common:lorem")}
                        </Typography>
                        <Typography variant="body3" component="p">
                            + {t("collect")}.
                        </Typography>
                    </Box>
                </Box>
            </RootWidgetStyle>
        </Grid>
    );
};
