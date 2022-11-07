import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Heading } from "src/components";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const ComingSoonPage = () => {
    return (
        <AppLayout title="Coming Soon">
            <Heading sx={{ mb: 6 }} title="Coming Soon" size="modal-title" />
        </AppLayout>
    );
};

export default ComingSoonPage;
