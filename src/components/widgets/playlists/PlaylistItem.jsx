import Image from "next/image";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RootWidgetStyle } from "src/components/styles";
import Img from "src/assets/img/trialImg.png";

const Textbox = styled(Typography)({
    variant: "h5",
    marginLeft: 17,
    fontWeight: 700,
    fontSize: 20,
});

export const PlaylistItem = ({ title }) => (
    <RootWidgetStyle sx={{ width: 330 }}>
        <Image alt="" src={Img} width="70" height="70" />
        <Textbox>{title}</Textbox>
    </RootWidgetStyle>
);
