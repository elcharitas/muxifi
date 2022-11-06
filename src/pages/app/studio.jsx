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
            <Heading
                sx={{ mb: 6 }}
                title="Creator Studio"
                subtitle="Mint/Upload a new Album to Muxifi"
                size="modal-title"
            />
        </AppLayout>
    );
};

export default StudioPage;
