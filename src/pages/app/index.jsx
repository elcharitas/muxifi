import MusicIcon from "src/components/MusicIcon";
import { PlaylistItem, PlaylistCard } from "src/components";
import AppLayout from "src/layouts/app";

const AppPage = () => {
    return (
        <AppLayout title="Welcome to MuxiFi">
            <PlaylistCard title="Recent Playlist" />
            <PlaylistItem />
            <MusicIcon />
        </AppLayout>
    );
};

export default AppPage;
