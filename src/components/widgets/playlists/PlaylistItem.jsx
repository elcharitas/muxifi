import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RootWidgetStyle } from "src/components/styles";
import Img from "src/assets/img/trialImg.png";

const Textbox = styled(Typography)({
    variant: "h5",
    marginLeft: 17,
    fontWeight: 700,
    fontSize: { xs: 14, md: 18 },
});

export const PlaylistItem = ({ title }) => (
    <Grid item xs={6} sm={4} md={3}>
        <RootWidgetStyle sx={{ width: { xs: 200, md: 300 } }}>
            <Image alt="" src={Img} width="70" height="70" />
            <Textbox>{title}</Textbox>
        </RootWidgetStyle>
    </Grid>
);
