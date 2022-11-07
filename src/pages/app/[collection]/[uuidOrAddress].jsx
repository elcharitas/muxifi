import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { MacScrollbar } from "mac-scrollbar";
import { Box, Stack } from "@mui/material";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Search } from "src/components";
import { RootStyle } from "src/components/styles";
import { ItemBoardSmall, ItemHeader } from "src/components/widgets";
import { usePlaylist } from "src/hooks";
import NotFoundPage from "src/pages/404";
import { getAlbumMetaQuery } from "src/utils/query";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

const CollectionListing = () => {
    const { address } = useAccount();
    const { query } = useRouter();
    const { read, savePlaylist } = usePlaylist();
    const [collection, setCollection] = useState({});

    useEffect(() => {
        if (query.collection === "playlists") {
            const [playlist] = read(query.uuidOrAddress, query.collection);
            setCollection(playlist);
        } else if (query.collection) {
            getAlbumMetaQuery({
                type: query.collection?.replace(/s$/, ""),
                id: query.uuidOrAddress,
            })
                .then((r) => setCollection(r.result[0].metadata))
                .catch(() => setCollection([]));
        }
    }, [query, read]);

    if (!collection) return <NotFoundPage />;
    return (
        <AppLayout title={collection.name}>
            <RootStyle>
                <ItemHeader
                    collection={collection}
                    isOwner={collection.address === address}
                    handleSave={(data) => {
                        savePlaylist({ ...collection, ...data });
                    }}
                    type={query.collection}
                />
                <Box sx={{ paddingTop: 14 }}>
                    <Stack justifyContent="end" direction="row">
                        <Search sx={{ mb: 3, width: 400 }} />
                    </Stack>
                    <MacScrollbar>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <ItemBoardSmall key={item} />
                        ))}
                    </MacScrollbar>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CollectionListing;
