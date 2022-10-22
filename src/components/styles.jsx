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
    "&:hover": {
        borderColor: theme.palette.tertiary.main,
    },
}));

export const ImgStyle = styled(Box)(({ $src }) => ({
    content: EMPTY_STRING,
    width: 200,
    height: 200,
    borderRadius: 12,
    backgroundImage: `url(${String($src?.src || $src)})`,
    backgroundSize: "cover",
    backgroundRepeat: "none",
}));
