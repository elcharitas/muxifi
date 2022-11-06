import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Heading } from "src/components";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const StudioPage = () => {
    return (
        <AppLayout title="Creator Studio">
            <Heading title="Studio" />
        </AppLayout>
    );
};

export default StudioPage;
