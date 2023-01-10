import { useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { MacScrollbar } from "mac-scrollbar";
import { Box, Grid, Stack } from "@mui/material";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Search } from "src/components";
import { RootStyle } from "src/components/styles";
import { ItemBoardSmall, ItemCard, ItemHeader } from "src/components/widgets";
import { useStore, usePlaylist, useQuery } from "src/hooks";
import { compAddress, getItemImage } from "src/utils/formats";

export const getStaticProps = async ({ locale, params }) => ({
    props: { params, ...(await buildI18n(locale, ["playlist"])) },
});

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking",
    };
};

const CollectionListing = ({ params = {} }) => {
    const { address } = useAccount();
    const {
        dispatch,
        currenTrack: { current, id: tid },
    } = useStore("currenTrack");

    const { collection: cid, uuidOrAddress: uuid } = params;
    const isPlaylist = cid === "playlists";
    const isArtiste = cid === "artistes";

    const { records, savePlaylist } = usePlaylist(uuid);
    const { data: collectionData } = useQuery("album_meta", {
        type: cid?.replace(/s$/, ""),
        id: uuid?.replace("0x", ""),
        skip: !uuid || isPlaylist,
    });
    const { data: artisteData } = useQuery("account_albums", {
        account: uuid,
        skip: !isArtiste,
    });
    const [filter, setFilter] = useState("");
    const collection = useMemo(() => {
        if (!isPlaylist && collectionData) {
            const { tokenId, ownerOf, metadata } = collectionData.result[0];
            return { ...metadata, id: `0x${tokenId}`, address: ownerOf };
        }
        return records[0] || {};
    }, [collectionData, records, isPlaylist]);
    const collectionStats = useMemo(() => {
        const length = (artisteData?.result || collection.queue)?.length || 0;
        return { count: `${length || 0} Songs`, length };
    }, [collection, artisteData]);

    return (
        <AppLayout title={collection.name}>
            <RootStyle>
                <ItemHeader
                    stats={collectionStats}
                    collection={collection}
                    isOwner={compAddress(collection.address, address)}
                    handleSave={(data) => {
                        savePlaylist({ ...collection, ...data });
                    }}
                    type={cid}
                />
                <Box sx={{ paddingTop: 14 }}>
                    {collectionStats.length && (
                        <Stack justifyContent="end" direction="row">
                            <Search
                                search={filter}
                                setSearch={setFilter}
                                sx={{ mb: 3, width: 400 }}
                            />
                        </Stack>
                    )}
                    <MacScrollbar>
                        {!isArtiste ? (
                            Array.from(collection?.queue || [])
                                .filter(({ name }) => {
                                    return (
                                        name?.indexOf(filter) > -1 || !filter
                                    );
                                })
                                .map((item, id) => (
                                    <ItemBoardSmall
                                        key={item.name}
                                        id={id}
                                        type={cid}
                                        isPlaying={
                                            current === id && tid === uuid
                                        }
                                        handlePlay={() => {
                                            dispatch({
                                                id: uuid,
                                                type: cid,
                                                current: id,
                                            });
                                        }}
                                        {...item}
                                    />
                                ))
                        ) : (
                            <Grid
                                container
                                spacing="18px"
                                sx={{ "& > *": { margin: "1%!important" } }}
                            >
                                {artisteData?.result.map(({ metadata }) => (
                                    <ItemCard
                                        key={metadata.id}
                                        id={metadata.id}
                                        type={cid}
                                        title={metadata.name || collection.name}
                                        desc={metadata.description}
                                        image={getItemImage(metadata.image)}
                                        owner={undefined}
                                    />
                                ))}
                            </Grid>
                        )}
                    </MacScrollbar>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CollectionListing;
