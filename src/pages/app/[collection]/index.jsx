import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import AppLayout from "src/layouts/app";
import { RootStyle } from "src/components/styles";
import { buildI18n } from "src/utils/i18n";
import { Box, Grid } from "@mui/material";
import { Heading } from "src/components";
import { CollectionCard } from "src/components/collections";
import { ItemCard } from "src/components/widgets";
import { usePlaylist } from "src/hooks";
import { CONFIG } from "src/config";
import { getAlbumsQuery } from "src/utils/query";
import { getItemImage } from "src/utils/formats";

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
    const { query } = useRouter();
    const { records } = usePlaylist();
    const [items, setItems] = useState([]);
    const { t } = useTranslation();
    const { collection } = query;
    const lang = t(collection, { returnObjects: true });

    useEffect(() => {
        if (query.collection === "playlists") {
            setItems(records);
        } else {
            setItems([]);
            getAlbumsQuery({ type: collection.replace(/s$/, "") }).then((r) => {
                const newItems = r.result.map((i) => ({
                    ...i.metadata,
                    id: i.tokenId,
                    address: i.ownerOf,
                }));
                setItems(newItems);
            });
        }
    }, [records, query, collection]);

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
                                title={item.name}
                                desc={item.description}
                                image={getItemImage(item.image, item.address)}
                                owner={
                                    collection !== "artistes"
                                        ? item.address
                                        : undefined
                                }
                                handlePlay={false}
                            />
                        ))}
                    </Grid>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CollectionsPage;
