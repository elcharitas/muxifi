const { styled } = require("@mui/material");

export const RootStyle = styled("div")(({ theme }) => ({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.default,
}));
