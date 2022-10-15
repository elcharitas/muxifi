import Head from "next/head";
import { styled } from "@mui/material";

export const RootStyle = styled("div")(({ theme }) => ({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.default,
}));

const AppLayout = ({ title = "", children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <RootStyle>{children}</RootStyle>
        </>
    );
};

export default AppLayout;
