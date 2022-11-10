import { useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { MacScrollbar } from "mac-scrollbar";
import { Box, Grid, Stack } from "@mui/material";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Search } from "src/components";
import { RootStyle } from "src/components/styles";
import { ItemBoardSmall, ItemCard, ItemHeader } from "src/components/widgets";
import { useStore, usePlaylist, useQuery } from "src/hooks";
import { compAddress, getItemImage } from "src/utils/formats";

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
    const {
        set,
        currenTrack: { current, id: tid },
    } = useStore("currenTrack");

    const { collection: cid, uuidOrAddress: uuid } = query;
    const isPlaylist = cid === "playlists";
    const isArtiste = cid === "artistes";

    const { records, savePlaylist } = usePlaylist(uuid);
    const { data: collectionData } = useQuery("album_meta", {
        type: cid?.replace(/s$/, ""),
        id: uuid.replace("0x", ""),
        skip: isPlaylist,
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
                                    return name.indexOf(filter) > -1;
                                })
                                .map((item, id) => (
                                    <ItemBoardSmall
                                        key={item.name}
                                        id={id}
                                        isPlaying={
                                            current === id && tid === uuid
                                        }
                                        handlePlay={() => set("current", id)}
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
                                        href={`/app/${cid}/${metadata.id}`}
                                        title={metadata.name}
                                        desc={metadata.description}
                                        image={getItemImage(metadata.image)}
                                        owner={undefined}
                                        handlePlay={false}
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
