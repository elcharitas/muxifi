import Image from "next/image";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useMediaQuery, Box, Drawer } from "@mui/material";
import { Anchor } from "src/components";
import { CONFIG } from "src/config";

const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
        width: CONFIG.UI.APP_SIDEBAR_WIDTH,
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
            <Box>
                <Anchor
                    href="/"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 64,
                        mt: 2,
                    }}
                >
                    <Image
                        src="/assets/svgs/logo.svg"
                        alt="logo"
                        width={100}
                        height={50}
                    />
                </Anchor>
            </Box>

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
                        sx: { width: CONFIG.UI.APP_SIDEBAR_WIDTH },
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
                            width: CONFIG.UI.APP_SIDEBAR_WIDTH,
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
