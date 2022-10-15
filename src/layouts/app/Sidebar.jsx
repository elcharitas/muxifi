import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Drawer } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
        width: 250,
    },
}));

const Sidebar = ({ isOpenSidebar, onCloseSidebar }) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, []);

    const renderContent = (
        <Box
            sx={{
                height: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Box>{/* <Logo /> */}</Box>

            <Box>{/* <Footer /> */}</Box>
            <Box sx={{ flexGrow: 1 }} />
        </Box>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: 250 },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: 250,
                            bgcolor: "background.default",
                            borderRightStyle: "none",
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
};

export default Sidebar;
