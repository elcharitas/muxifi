import Image from "next/image";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RootWidgetStyle } from "src/components/styles";
import Img from "src/assets/img/trialImg.png";

const Textbox = styled(Typography)({
    variant: "p",
    marginLeft: 17,
    fontWeight: 700,
    fontSize: 24,
});

export const PlaylistCard = ({ title }) => (
    <RootWidgetStyle sx={{ width: 330 }}>
        <Image alt="" src={Img} width="81" height="81" />
        <Textbox>{title}</Textbox>
    </RootWidgetStyle>
);
