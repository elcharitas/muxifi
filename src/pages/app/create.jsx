import AppLayout from "src/layouts/app";
import { RootStyle } from "src/components/styles";
import { CreatePlaylistHeader, PlaylistSmallCards } from "src/components/widgets";
import { Box, Typography } from "@mui/material";
import BrokenClose from "src/assets/svgs/broken-close-icon.svg";
import { buildI18n } from "src/utils/i18n";
import { Search } from "src/layouts/app/Search";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const CreateHomePage = () => {
    return (
        <AppLayout title="Create Playlist">
            <RootStyle
                sx={{
                    paddingLeft: 0,
                    paddingRight: 0,
                }}
            >
                <CreatePlaylistHeader />

                <Box sx={{ padding: "0 36px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "43px 0",
                            borderTop: "1px solid #2B3530",
                        }}
                    >
                        <Typography
                            variant="hero-title"
                            color="tertiary.light"
                        >Let find more songs for your playlist
                        </Typography>
                        <BrokenClose />
                    </Box>

                    <Search />

                    <PlaylistSmallCards />
                    {/* FIXME: Remove lines below */}
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />

                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CreateHomePage;
