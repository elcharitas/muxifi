import { styled } from "@mui/material/styles";
import Image from "next/image";
import Img from "src/assets/img/trialImg.png";
import { Typography } from "@mui/material";
import { RootWidgetStyle } from "../../common.styles";

const Textbox = styled(Typography)({
    variant: "p",
    marginLeft: 17,
    fontWeight: 700,
    fontSize: 24,
});

const PlaylistCard = ({ title }) => (
    <RootWidgetStyle sx={{ width: 330 }}>
        <Image alt="" src={Img} width="81" height="81" />
        <Textbox>{title}</Textbox>
    </RootWidgetStyle>
);

export default PlaylistCard;
