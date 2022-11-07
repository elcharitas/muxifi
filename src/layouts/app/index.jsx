import Head from "next/head";
import { useEffect, useState } from "react";
import { styled, Box, Grid, Typography } from "@mui/material";
import { AudioPlayerProvider } from "react-use-audio-player";
import { useIsMounted, useIsClient } from "usehooks-ts";
import { ItemCard } from "src/components/widgets";
import { RootStyle as PageStyle } from "src/components/styles";
import { Heading } from "src/components";
import { useRouter } from "next/router";
import { useQuery, useStore } from "src/hooks";
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

const Wrapper = styled("div")(({ theme, $ready }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: 50,
    marginTop: 60,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("lg")]: {
        padding: "50px 0",
    },
    ...($ready && {
        marginBottom: 100,
    }),
}));

const AppLayout = ({ title = "", children }) => {
    const isMounted = useIsMounted();
    const isClient = useIsClient();
    const show = isMounted && isClient;
    const { currentTrack } = useStore("currentTrack");
    const [isOpenSidebar, setOpenSidebar] = useState(false);
    const [search, setSearch] = useState("");
    const { asPath } = useRouter();
    const { data: results, isLoading } = useQuery("matching_albums", {
        query: search,
        skip: !search,
    });

    useEffect(() => {
        setSearch("");
    }, [asPath]);

    return (
        show && (
            <>
                <Head>
                    <title>{`${title} | MuxiFi`}</title>
                </Head>
                <Box>
                    <RootStyle>
                        <Navbar
                            onOpenSidebar={() => setOpenSidebar(true)}
                            search={search}
                            setSearch={setSearch}
                        />
                        <AudioPlayerProvider>
                            <ControlBar />
                            <Sidebar
                                isOpenSidebar={isOpenSidebar}
                                onCloseSidebar={() => setOpenSidebar(false)}
                            />
                            <Wrapper $ready={!!currentTrack.id}>
                                {search ? (
                                    <PageStyle>
                                        <Heading
                                            sx={{ mb: 6 }}
                                            title="Search"
                                            size="modal-title"
                                        />
                                        <Grid
                                            container
                                            spacing="18px"
                                            sx={{
                                                "& > *": {
                                                    margin: "1%!important",
                                                },
                                            }}
                                        >
                                            {results?.map?.((item) => (
                                                <ItemCard
                                                    key={item.id}
                                                    title={item.title}
                                                    desc={item.description}
                                                    image={item.image}
                                                    owner={item.address}
                                                />
                                            )) ?? (
                                                <Typography>
                                                    {!isLoading
                                                        ? "Sorry, There were no matching results."
                                                        : "Loading..."}
                                                </Typography>
                                            )}
                                        </Grid>
                                    </PageStyle>
                                ) : (
                                    children
                                )}
                            </Wrapper>
                        </AudioPlayerProvider>
                    </RootStyle>
                </Box>
            </>
        )
    );
};

export default AppLayout;
