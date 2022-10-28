import AppLayout from "src/layouts/app";
import { RootStyle } from "src/components/styles";
import { buildI18n } from "src/utils/i18n";
import { Box, Grid } from "@mui/material";
import { Heading } from "src/components";
import { CollectionCard } from "src/components/collections";
import { PlaylistCard } from "src/components/widgets";
import PlayListImg from "src/assets/img/trial2.png";
// import { useControl } from "src/hooks";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const PlaylistPage = () => {
    // const { setTrack } = useControl();

    return (
        <AppLayout title="Playlists">
            <RootStyle>
                <Box>
                    <Heading
                        sx={{ mb: "24px" }}
                        title="Playlist"
                        size="modal-title"
                    />

                    <Grid container spacing="18px">
                        <CollectionCard title="Favourite Collections" />

                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                            (item) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    lg={3}
                                    key={item}
                                >
                                    <PlaylistCard
                                        title="Playlist Title"
                                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        image={PlayListImg}
                                        isCollected
                                    />
                                </Grid>
                            ),
                        )}
                    </Grid>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default PlaylistPage;