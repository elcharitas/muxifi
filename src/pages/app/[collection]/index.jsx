import AppLayout from "src/layouts/app";
import { RootStyle } from "src/components/styles";
import { buildI18n } from "src/utils/i18n";
import { Box, Grid } from "@mui/material";
import { Heading } from "src/components";
import { CollectionCard } from "src/components/collections";
import { ItemCard } from "src/components/widgets";
import PlayListImg from "src/assets/img/trial2.png";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

export const getStaticPaths = async () => {
    const collections = ["albums", "artistes", "podcasts", "playlists"];
    return {
        paths: collections.map((collection) => ({
            params: { collection },
        })),
        fallback: false,
    };
};

const CollectionsPage = () => {
    return (
        <AppLayout title="Podcasts">
            <RootStyle>
                <Box>
                    <Heading
                        sx={{ mb: 6 }}
                        title="Podcasts"
                        size="modal-title"
                    />

                    <Grid
                        container
                        spacing="18px"
                        sx={{ "& > *": { margin: "1%!important" } }}
                    >
                        <CollectionCard
                            title="Favorite Episodes"
                            sx={{ backgroundColor: "#CC0C0C" }}
                        />

                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <ItemCard
                                key={item}
                                title="Podcast Title"
                                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                image={PlayListImg}
                                isCollected
                            />
                        ))}
                    </Grid>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CollectionsPage;