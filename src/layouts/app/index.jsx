import Head from "next/head";
import { useState } from "react";
import { styled, Box } from "@mui/material";
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
        paddingTop: 80,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

const AppLayout = ({ title = "", children }) => {
    const [isOpenSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            <Head>
                <title>{`${title} | MuxiFi`}</title>
            </Head>
            <Box>
                <RootStyle>
                    <Navbar onOpenSidebar={() => setOpenSidebar(true)} />
                    <ControlBar />
                    <Sidebar
                        isOpenSidebar={isOpenSidebar}
                        onCloseSidebar={() => setOpenSidebar(false)}
                    />
                    <Wrapper>{children}</Wrapper>
                </RootStyle>
            </Box>
        </>
    );
};

export default AppLayout;
