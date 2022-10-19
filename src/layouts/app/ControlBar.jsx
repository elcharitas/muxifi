import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    backgroundColor: theme.palette.background.default,
    position: "fixed",
    top: "auto",
    bottom: 0,
    zIndex: 9999,
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: 80,
    backgroundColor: theme.palette.background.default,
    borderTop: `1px dashed ${theme.palette.border.main}`,
    [theme.breakpoints.up("lg")]: {
        minHeight: 100,
        padding: theme.spacing(0, 5),
    },
}));

const ControlBar = ({ onOpenSidebar }) => {
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
                    {/* <ConnectButton /> */}
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    );
};

export default ControlBar;
