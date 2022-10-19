import HomePage from "src/components/home";
import MusicIcon from "src/components/MusicIcon";
import { PlaylistItem, PlaylistCard } from "src/components";
import AppLayout from "src/layouts/app";

const AppPage = () => {
    return (
        <AppLayout title="Welcome to MuxiFi">
            <HomePage />
            <PlaylistItem title="Recent Playlist" />
            <PlaylistCard title="Gifted" />
            <MusicIcon />
        </AppLayout>
    );
};

export default AppPage;
