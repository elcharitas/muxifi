import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
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
import { CONFIG } from "src/config";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

export const getStaticPaths = async () => {
    return {
        paths: CONFIG.APP.COLLECTIONS.map((collection) => ({
            params: { collection },
        })),
        fallback: false,
    };
};

const CollectionsPage = () => {
    const { address } = useAccount();
    const { query } = useRouter();
    const { records } = usePlaylist();
    const [items, setItems] = useState([]);
    const { t } = useTranslation();
    const { collection } = query;
    const lang = t(collection, { returnObjects: true });

    useEffect(() => {
        if (query.collection === "playlists") {
            setItems(records);
        } else setItems([]);
    }, [records, query]);

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
                        {lang.fav && (
                            <CollectionCard
                                title={lang.fav}
                                sx={{ backgroundColor: "#CC0C0C" }}
                            />
                        )}

                        {items.map((item) => (
                            <ItemCard
                                key={item.id}
                                id={item.id}
                                href={`/app/${collection}/${item.id}`}
                                title={item.title}
                                desc={item.description}
                                image={PlayListImg}
                                isCollectible={item.address !== address}
                            />
                        ))}
                    </Grid>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CollectionsPage;
