import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import { CONFIG } from "src/config";

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
        width: `calc(100% - ${CONFIG.UI.APP_SIDEBAR_WIDTH}px)`,
    },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: 50,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("lg")]: {
        minHeight: 60,
        padding: theme.spacing(0, 5),
    },
}));

const Navbar = ({ onOpenSidebar }) => {
    return (
        <RootStyle>
            <ToolbarStyle>
                <IconButton
                    onClick={onOpenSidebar}
                    sx={{
                        mr: 1,
                        color: "text.primary",
                        display: { lg: "none" },
                    }}
                >
                    {/* <Menu /> */}
                </IconButton>

                <Box sx={{ flexGrow: 1 }} />

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: 0.5, sm: 1.5 }}
                >
                    {/* <Account /> */}
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    );
};

export default Navbar;
