import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Image from "next/image";
import Img from "src/assets/img/whiteFrame.png";
import { RootWidgetStyle } from "src/components/styles";

const ImageBox = styled(Box)({
    width: 121,
    height: 121,
    position: "absolute",
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 12,
});

export const SearchCard = ({ cardColor }) => {
    return (
        <RootWidgetStyle sx={{ position: "relative", height: 241, backgroundColor: cardColor || "#F50D6E" }}>
            <ImageBox>
                <Image alt="" src={Img} layout="fill" objectFit="cover" sx={{ borderBottomRightRadius: "12" }} />
            </ImageBox>
        </RootWidgetStyle>
    );
};
