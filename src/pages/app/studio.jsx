import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { Box, TextField } from "@mui/material";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { pascal } from "radash";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Button, Heading } from "src/components";
import { useCollection, useCollectionRead, useNFTStorage } from "src/hooks";
import { FileUpload } from "src/components/FileUpload";
import { useAccount } from "wagmi";
import { CreatorModal } from "src/components/widgets/studio/CreatorModal";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const ALBUM_FIELDS = {
    title: "text",
    description: "text",
    image: "file",
    audio: "file",
    tags: "text",
};

const StudioPage = () => {
    const { address } = useAccount();
    const { openConnectModal } = useConnectModal();
    const [album, dispatch] = useImmer({
        title: "",
        artist: address,
        description: "",
        cover: "",
        image: "",
        audio: "",
        tags: "",
    });
    const [albumData, setAlbumData] = useState();
    const { data: creatorData } = useCollectionRead({
        type: "creator",
        method: "balanceOf",
        args: [address],
    });
    const creatorId = creatorData?.toNumber();
    const { metadata } = useNFTStorage(albumData);
    const { writeAsync } = useCollection({
        method: "create",
        args: metadata?.url ? [metadata?.url, 30000] : [],
    });

    useEffect(() => {
        openConnectModal?.();
    }, [openConnectModal]);

    useEffect(() => {
        writeAsync?.().finally(() => setAlbumData(undefined));
    }, [writeAsync]);

    return (
        <AppLayout title="Creator Studio">
            <Heading
                sx={{ mb: 6 }}
                title="Creator Studio"
                subtitle="Mint/Upload a new Album to Muxifi"
                size="modal-title"
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    maxWidth: "400px",
                }}
            >
                {Object.entries(ALBUM_FIELDS).map(([key, type]) => {
                    if (type === "file") {
                        return (
                            <FileUpload
                                key={key}
                                label={pascal(key)}
                                exts={
                                    key === "audio" ? ["mp3", "wav"] : undefined
                                }
                                onChange={(value) => {
                                    dispatch((draft) => {
                                        // eslint-disable-next-line no-param-reassign
                                        draft[key] = value;
                                    });
                                }}
                            />
                        );
                    }
                    return (
                        <TextField
                            key={key}
                            label={pascal(key)}
                            value={album[key]}
                            onChange={(e) => {
                                dispatch((draft) => {
                                    // eslint-disable-next-line no-param-reassign
                                    draft[key] = e.target.value;
                                });
                            }}
                            multiline={key === "description"}
                            rows={key === "description" ? 4 : undefined}
                            fullWidth
                        />
                    );
                })}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setAlbumData({
                            name: album.title,
                            description: album.description,
                            image: album.image,
                        });
                    }}
                    isLoading={!!albumData}
                >
                    Mint Album
                </Button>
            </Box>
            {!creatorId && (
                <CreatorModal
                    creator={{}}
                    open={!creatorId && !openConnectModal}
                />
            )}
        </AppLayout>
    );
};

export default StudioPage;
