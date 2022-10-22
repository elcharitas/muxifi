import Head from "next/head";
import { styled, Box } from "@mui/material";
import PageNavbar from "./Navbar";

export const RootStyle = styled(Box)(({ theme }) => ({
    display: "flex",
    minHeight: "100vh",
    overflow: "hidden",
    position: "relative",
    background: theme.palette.gradients.background,
}));

const PageWrapper = styled("div")(({ theme }) => ({
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

const PageLayout = ({ title = "", children }) => {
    return (
        <>
            <Head>
                <title>{title} | MuxiFi</title>
            </Head>
            <RootStyle>
                <PageNavbar />
                <PageWrapper>{children}</PageWrapper>
            </RootStyle>
        </>
    );
};

export default PageLayout;
