import Head from "next/head";
import { RootStyle } from "./index.style";

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
