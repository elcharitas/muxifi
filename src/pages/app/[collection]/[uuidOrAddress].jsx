import { useMemo } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { MacScrollbar } from "mac-scrollbar";
import { Box, Stack } from "@mui/material";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Search } from "src/components";
import { RootStyle } from "src/components/styles";
import { ItemBoardSmall, ItemHeader } from "src/components/widgets";
import { usePlaylist, useQuery } from "src/hooks";

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
    const { records, savePlaylist } = usePlaylist(query.uuidOrAddress);
    const { data: collectionData } = useQuery("album_meta", {
        type: query.collection?.replace(/s$/, ""),
        id: query.uuidOrAddress,
        skip: query.collection === "playlists",
    });
    const collection = useMemo(() => {
        if (query.collection !== "playlists") {
            return collectionData?.result[0].metadata || {};
        }
        return records[0] || {};
    }, [collectionData, records, query]);

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
