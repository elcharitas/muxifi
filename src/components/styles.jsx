/** This module would hold all common styles */
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Anchor } from "./Anchor";

export const EMPTY_STRING = JSON.stringify(" ");

export const RootWidgetStyle = styled(Anchor)(({ theme }) => ({
    width: 241,
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
    padding: 15,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.paper,
    borderStyle: "none",
    borderWidth: "1px",
    borderColor: theme.palette.border.main,
    "& img": {
        borderRadius: 12,
    },
    ".root-btn": {
        display: "none",
        padding: 8,
    },
    "&:hover": {
        borderColor: theme.palette.tertiary.main,
        ".root-btn": {
            display: "block",
        },
    },
}));

export const ImgStyle = styled(({ $src, ...props }) => <Box {...props} />)(
    ({ $src }) => ({
        display: "flex",
        content: EMPTY_STRING,
        width: 200,
        height: 200,
        borderRadius: 12,
        backgroundImage: `url(${String($src?.src || $src)})`,
        backgroundSize: "cover",
        backgroundRepeat: "none",
        alignItems: "end",
        justifyContent: "end",
    }),
);

export const RootStyle = styled("div")(({ theme }) => ({
    minHeight: "100%",
    overflow: "hidden",
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 36,
    backgroundColor: theme.palette.background.default,
}));

export const SearchInput = styled("input")({
    width: "95%",
    outline: "none",
    background: "transparent",
    border: "none",
    fontWeight: 300,
    fontSize: "16.67px",
});

export const TextBox = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    border: "1px solid",
    borderColor: theme.palette.tertiary.light,
    padding: "12px",
    marginBottom: 5,
    borderRadius: 12,
}));

export const IconBox = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 360,
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.dark,
}));

export const MessageInput = styled("textarea")({
    width: "95%",
    height: 125,
    outline: "none",
    background: "transparent",
    border: "none",
    fontWeight: 300,
    fontSize: "16.67px",
    resize: "none",
});
