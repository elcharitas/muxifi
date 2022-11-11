import { useMemo } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import AppLayout from "src/layouts/app";
import { RootStyle } from "src/components/styles";
import { buildI18n } from "src/utils/i18n";
import { Box, Grid } from "@mui/material";
import { Heading } from "src/components";
import { CollectionCard } from "src/components/collections";
import { ItemCard } from "src/components/widgets";
import { usePlaylist, useQuery } from "src/hooks";
import { CONFIG } from "src/config";
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
    const { t } = useTranslation();
    const { collection } = query;
    const lang = t(collection, { returnObjects: true });

    const { records } = usePlaylist();
    const { data: itemsData } = useQuery("albums", {
        type: collection.replace(/s$/, ""),
        skip: collection === "playlists",
    });
    const items = useMemo(() => {
        if (collection === "playlists") return records;
        return (
            itemsData?.result.map((i) => ({
                ...i.metadata,
                id: `0x${i.tokenId}`,
                address: i.ownerOf,
            })) || []
        );
    }, [records, collection, itemsData]);

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
                        {lang.fav && <CollectionCard title={lang.fav} />}

                        {items.map((item) => (
                            <ItemCard
                                key={item.id}
                                id={item.id}
                                type={collection}
                                title={item.name}
                                desc={item.description}
                                image={getItemImage(item.image, item.id)}
                                owner={
                                    collection !== "artistes"
                                        ? item.address
                                        : undefined
                                }
                                handlePlay={
                                    collection === "artistes"
                                        ? false
                                        : undefined
                                }
                            />
                        ))}
                    </Grid>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CollectionsPage;
