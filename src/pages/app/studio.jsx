import { useEffect, useMemo, useState } from "react";
import { useImmer } from "use-immer";
import { Box, TextField } from "@mui/material";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useTranslation } from "next-i18next";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Button, Heading } from "src/components";
import { useCollection, useCollectionRead, useNFTStorage } from "src/hooks";
import { FileUpload } from "src/components/FileUpload";
import { useAccount } from "wagmi";
import { CreatorModal } from "src/components/widgets/studio/CreatorModal";
import { ItemCard } from "src/components/widgets";
import toast from "react-hot-toast";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["studio"])),
    },
});

const ALBUM_FIELDS = {
    title: "text",
    description: "text",
    image: "file",
    audio: "file",
    tags: "text",
    // royalty: "number",
};

const StudioPage = () => {
    const { address } = useAccount();
    const { t } = useTranslation("studio");
    const { openConnectModal } = useConnectModal();
    const [album, dispatch] = useImmer({
        title: "",
        artist: address,
        description: "",
        cover: "",
        image: [],
        audio: [],
        tags: "",
        royalty: 30,
    });
    const [albumData, setAlbumData] = useState();
    const { data: creatorData } = useCollectionRead({
        type: "artiste",
        method: "balanceOf",
        args: [address],
        skip: !address,
    });
    const creatorId = creatorData?.toNumber();
    const { metadata } = useNFTStorage(albumData);
    const { writeAsync } = useCollection({
        type: "album",
        method: "freeCreate",
        args: [metadata.url],
        skip: !metadata.url,
    });
    const playImage = useMemo(() => {
        return album.image[0]?.src
            ? URL.createObjectURL(album.image[0]?.src)
            : undefined;
    }, [album.image]);

    useEffect(() => {
        openConnectModal?.();
    }, [openConnectModal]);

    useEffect(() => {
        if (metadata.url) {
            writeAsync?.()
                .then(() => {
                    toast.success("Album created successfully");
                })
                .catch((e) => {
                    toast.error(e.message);
                })
                .finally(() => setAlbumData(undefined));
        }
    }, [writeAsync, metadata]);

    return (
        <AppLayout title={t("page.title")}>
            <Heading
                sx={{ mb: 6 }}
                title={t("page.title")}
                subtitle={t("page.subtitle")}
                size="modal-title"
            />
            <Box sx={{ display: "flex" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        width: "100%",
                        maxWidth: "400px",
                    }}
                >
                    {Object.entries(ALBUM_FIELDS).map(([key, type]) => {
                        if (type === "file") {
                            return (
                                <FileUpload
                                    key={key}
                                    label={t(`form.${key}`)}
                                    exts={
                                        key === "audio"
                                            ? ["mp3", "wav"]
                                            : undefined
                                    }
                                    onChange={(e) => {
                                        dispatch((draft) => {
                                            if (e.target.files.length === 0) {
                                                return;
                                            }
                                            const files = Array.from(
                                                e.target.files,
                                            ).map((src, id) => {
                                                return { src, id };
                                            });
                                            // eslint-disable-next-line no-param-reassign
                                            draft[key] = files;
                                            toast.success(
                                                `Added ${files.length} ${key} files`,
                                            );
                                        });
                                    }}
                                />
                            );
                        }
                        return (
                            <TextField
                                key={key}
                                type={type}
                                label={t(`form.${key}`)}
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
                        disabled={!!openConnectModal}
                        onClick={() => {
                            if (openConnectModal) {
                                openConnectModal();
                                return;
                            }
                            if (!album.image) return;
                            setAlbumData({
                                name: album.title,
                                description: album.description,
                                image: album.image[0]?.src,
                                queue: album.audio,
                                royalty: album.royalty,
                                address,
                            });
                        }}
                        isLoading={!!albumData}
                    >
                        {t("form.submit")}
                    </Button>
                </Box>
                <Box sx={{ ml: 4 }}>
                    <ItemCard
                        id="new"
                        title={album.title || "------"}
                        desc={album.description || "--------"}
                        image={playImage}
                        owner={address}
                    />
                </Box>
            </Box>
            {creatorId !== undefined && !creatorId && (
                <CreatorModal
                    creator={{}}
                    open={!creatorId && !openConnectModal}
                />
            )}
        </AppLayout>
    );
};

export default StudioPage;
