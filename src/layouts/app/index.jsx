import Head from "next/head";
import { useState } from "react";
import { styled, Box } from "@mui/material";
import { AudioPlayerProvider } from "react-use-audio-player";
import { useIsMounted, useIsClient } from "usehooks-ts";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ControlBar from "./ControlBar";

export const RootStyle = styled("div")(({ theme }) => ({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.default,
}));

const Wrapper = styled("div")(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: 50,
    marginTop: 60,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("lg")]: {
        padding: "50px 0",
    },
}));

const AppLayout = ({ title = "", children }) => {
    const isMounted = useIsMounted();
    const isClient = useIsClient();
    const [isOpenSidebar, setOpenSidebar] = useState(false);
    return (
        isMounted
        && isClient && (
            <>
                <Head>
                    <title>{`${title} | MuxiFi`}</title>
                </Head>
                <Box>
                    <RootStyle>
                        <Navbar onOpenSidebar={() => setOpenSidebar(true)} />
                        <AudioPlayerProvider>
                            <ControlBar />
                            <Sidebar
                                isOpenSidebar={isOpenSidebar}
                                onCloseSidebar={() => setOpenSidebar(false)}
                            />
                            <Wrapper>{children}</Wrapper>
                        </AudioPlayerProvider>
                    </RootStyle>
                </Box>
            </>
        )
    );
};

export default AppLayout;
