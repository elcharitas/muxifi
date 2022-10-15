import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import { CONFIG } from "src/config";
import { Button } from "src/components";

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
        width: `calc(100% - ${CONFIG.UI.APP_SIDEBAR_WIDTH}px)`,
    },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: 80,
    backgroundColor: theme.palette.background.default,
    borderBottom: "1px dashed rgba(255, 255, 255, 0.12)",
    [theme.breakpoints.up("lg")]: {
        minHeight: 100,
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
                    <Button>Connect Wallet</Button>
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    );
};

export default Navbar;
