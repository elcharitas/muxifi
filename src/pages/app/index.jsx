import LargeWidgets from "src/components/LargeWidgets";
import MusicIcon from "src/components/MusicIcon";
import SmallWidgets from "src/components/SmallWidgets";
import AppLayout from "src/layouts/app";

const AppPage = () => {
    return (
        <AppLayout title="Welcome to MuxiFi">
            <SmallWidgets />
            <LargeWidgets />
            <MusicIcon />
        </AppLayout>
    );
};

export default AppPage;
