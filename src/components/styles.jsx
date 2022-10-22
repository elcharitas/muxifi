/** This module would hold all common styles */
import { styled } from "@mui/material/styles";
import { Anchor } from "./Anchor";

export const RootWidgetStyle = styled(Anchor)(({ theme }) => ({
    width: 241,
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
    padding: 19,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.paper,
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: theme.palette.border.main,
    "& img": {
        borderRadius: 12,
    },
    "&:hover": {
        borderColor: theme.palette.tertiary.main,
    },
}));
