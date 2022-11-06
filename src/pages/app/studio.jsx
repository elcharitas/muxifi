import { useImmer } from "use-immer";
import { Box, TextField } from "@mui/material";
import { pascal } from "radash";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Button, Heading } from "src/components";
import { useCollection, useCollectionRead } from "src/hooks";
import { FileUpload } from "src/components/FileUpload";
import { useAccount } from "wagmi";

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
    const [album, dispatch] = useImmer({
        title: "",
        artist: address,
        description: "",
        cover: "",
        image: "",
        audio: "",
        tags: "",
    });
    const { data: creatorData } = useCollectionRead({
        type: "album",
        method: "count",
        args: [],
    });
    const { data: albumData } = useCollection({
        method: "create",
        args: [],
    });
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
                <Button variant="contained" color="primary">
                    Mint Album
                </Button>
            </Box>
        </AppLayout>
    );
};

export default StudioPage;
