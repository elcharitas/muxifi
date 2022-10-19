import { styled } from "@mui/material/styles";
import Image from "next/image";
import Img from "src/assets/temps/trialImg.png";
import { Box, Typography } from "@mui/material";

const RootStyle = styled(Box)(({ theme }) => ({
    width: 330,
    height: 120,
    // marginTop: 80,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    padding: 19,
    backgroundColor: theme.palette.background.default,
}));

const Textbox = styled(Typography)({
    variant: "p",
    marginLeft: 17,
    fontWeight: 700,
    fontSize: 24,
});

export const SmallWidgets = () => {
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
