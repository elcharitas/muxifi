import LargeWidgets from "src/components/LargeWidgets";
import SmallWidgets from "src/components/SmallWidgets";
import AppLayout from "src/layouts/app";

const AppPage = () => {
    return (
        <AppLayout title="Welcome to MuxiFi">
            <SmallWidgets />
            <LargeWidgets />
        </AppLayout>
    );
};

export default AppPage;
