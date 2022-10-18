/** This module would hold all common styles */
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const RootWidgetStyle = styled(Box)(({ theme }) => ({
    width: 241,
    marginTop: 80,
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
    padding: 19,
    backgroundColor: theme.palette.background.paper,
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: "rgba(255, 255, 255, 0.12)",
    "& img": {
        borderRadius: 12,
    },
}));
