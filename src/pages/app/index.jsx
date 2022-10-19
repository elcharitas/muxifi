import HomePage from "src/components/home";
import AppLayout from "src/layouts/app";

const AppPage = () => {
    return (
        <AppLayout title="Welcome to MuxiFi">
            <HomePage />
        </AppLayout>
    );
};

export default AppPage;
