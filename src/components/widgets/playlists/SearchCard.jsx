import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { RootWidgetStyle } from "src/components/styles";

const ImageBox = styled(Box)({
    width: 121,
    height: 121,
    position: "absolute",
    right: -10,
    bottom: -5,
    borderBottomRightRadius: 12,
    transform: "rotate(15deg)",
});

export const SearchCard = ({ cardColor, img }) => {
    return (
        <RootWidgetStyle
            sx={{
                position: "relative",
                height: 241,
                backgroundColor: cardColor || "#F50D6E",
                overflow: "hidden",
                alignItems: "flex-start",
                padding: "24px",
            }}
        >
            <Typography variant="modal-title">Podcast
            </Typography>
            <ImageBox>
                <Image
                    alt=""
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    sx={{ borderBottomRightRadius: "12" }}
                />
            </ImageBox>
        </RootWidgetStyle>
    );
};
