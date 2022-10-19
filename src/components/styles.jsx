/** This module would hold all common styles */
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const RootWidgetStyle = styled(Box)(({ theme }) => ({
    width: 241,
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
    padding: 19,
    backgroundColor: theme.palette.background.paper,
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: theme.palette.border.main,
    "& img": {
        borderRadius: 12,
    },
    "&:hover": {
        borderColor: "red", // enure to remove this
    },
}));
