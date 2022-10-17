import React from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Img from "src/temps/trial2.png";
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

// const Textbox = styled(Typography)({
//     variant: "p",
//     marginLeft: 17,
//     fontWeight: 700,
//     fontSize: 24,
// });

const LargeWidgets = () => {
    return (
        <RootStyle>
            <Image
                alt=""
                src={Img}
                width="81"
                height="81"
            />
            <Box>
                <Typography variant="h4" component="h6">P heading</Typography>
            </Box>
        </RootStyle>
    );
};

export default LargeWidgets;
