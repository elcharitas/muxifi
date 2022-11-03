import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import AppLayout from "src/layouts/app";
import { RootStyle } from "src/components/styles";
import { buildI18n } from "src/utils/i18n";
import { Box, Grid } from "@mui/material";
import { Heading } from "src/components";
import { CollectionCard } from "src/components/collections";
import { ItemCard } from "src/components/widgets";
import PlayListImg from "src/assets/img/trial2.png";
import { usePlaylist } from "src/hooks";

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
    const { query } = useRouter();
    const { records } = usePlaylist();
    const { t } = useTranslation();
    const { collection } = query;
    const lang = t(collection, { returnObjects: true });

    return (
        <AppLayout title={lang.title}>
            <RootStyle>
                <Box>
                    <Heading
                        sx={{ mb: 6 }}
                        title={lang.title}
                        size="modal-title"
                    />

                    <Grid
                        container
                        spacing="18px"
                        sx={{ "& > *": { margin: "1%!important" } }}
                    >
                        {collection !== "artistes" && (
                            <CollectionCard
                                title={lang.fav}
                                sx={{ backgroundColor: "#CC0C0C" }}
                            />
                        )}

                        {records.map((item) => (
                            <ItemCard
                                key={item.id}
                                href={`/app/${collection}/${item.id}`}
                                title={item.title}
                                desc={item.description}
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
