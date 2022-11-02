import { uid } from "radash";
import { useRouter } from "next/router";
import { CircularProgress, Stack } from "@mui/material";
import { usePlaylist } from "src/hooks";
import { buildI18n } from "src/utils/i18n";
import AccessLayout from "src/layouts/access";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const CreatePlaylistPage = () => {
    const router = useRouter();
    const { db: playlist } = usePlaylist();

    const onNavigate = () => {
        if (playlist) {
            const newId = uid(32);
            playlist.put({
                id: newId,
                title: "Playlist Name",
                description: "such a great playlist to listen to",
            });
            router.push(`/app/playlists/${newId}`);
        }
        return !!playlist;
    };

    return (
        <AccessLayout title="Create Playlist" onNavigate={onNavigate}>
            <Stack
                sx={{ height: "80vh" }}
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
                <CircularProgress />
            </Stack>
        </AccessLayout>
    );
};

export default CreatePlaylistPage;
