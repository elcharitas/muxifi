import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Image from "next/image";
import Img from "src/assets/temps/whiteFrame.png";

const RootStyle = styled(Box)({
    width: 241,
    height: 241,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    padding: 19,
    position: "relative",
});

const ImageBox = styled(Box)({
    width: 121,
    height: 121,
    position: "absolute",
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 12,
});

const Picture = styled(Image)({
    borderBottomRightRadius: 12,
});

export const SuggestedSearch = ({ cardColor }) => {
    return (
        <RootStyle sx={{ backgroundColor: cardColor || "#F50D6E" }}>
            <ImageBox>
                <Picture alt="" src={Img} layout="fill" objectFit="cover" />
            </ImageBox>
        </RootStyle>
    );
};
