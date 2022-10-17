import { styled } from "@mui/material/styles";
import Image from "next/image";
import Img from "src/temps/trialImg.png";
import { Box, Typography } from "@mui/material";

const RootStyle = styled(Box)({
    width: 330,
    height: 120,
    marginTop: 80,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    padding: 19,
    backgroundColor: "orange",
});

const Textbox = styled(Typography)({
    variant: "h6",
    marginLeft: 17,
});

const SmallWidgets = () => {
    return (
        <RootStyle>
            <Image
                alt=""
                src={Img}
                width="81"
                height="81"
            />
            <Textbox>Recent Playlist</Textbox>
        </RootStyle>
    );
};

export default SmallWidgets;
