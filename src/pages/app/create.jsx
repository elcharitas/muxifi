import { uid } from "radash";
import { useRouter } from "next/router";
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
    const playlist = usePlaylist();

    const onNavigate = () => {
        if (playlist) {
            const newId = uid(20);
            playlist.put({
                _id: newId,
                title: "Playlist Name",
            });
            router.push(`/playlist/${newId}`);
        }
        return !!playlist;
    };

    return <AccessLayout title="Create Playlist" onNavigate={onNavigate} />;
};

export default CreatePlaylistPage;
