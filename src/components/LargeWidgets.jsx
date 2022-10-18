import { styled } from "@mui/material/styles";
import Image from "next/image";
import Img from "src/assets/img/trial2.png";
import { Box, Typography } from "@mui/material";

const RootStyle = styled(Box)({
    width: 241,
    // height: 120,
    marginTop: 80,
    borderRadius: 12,
    alignItems: "center",
    padding: 19,
    backgroundColor: "orange",
});

const LargeWidgets = () => {
    return (
        <RootStyle>
            <Image
                alt=""
                src={Img}
                width="202"
                height="202"
                marginBottom="24"
            />
            <Box>
                <Typography variant="h5">P heading</Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography variant="body3" component="p">
                    + Collect Playlist.
                </Typography>
            </Box>
        </RootStyle>
    );
};

export default LargeWidgets;
