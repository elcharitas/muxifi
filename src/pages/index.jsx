import { useTranslation } from "next-i18next";
import { PageSection } from "src/components/widgets";
import { ImgStyle } from "src/components/styles";
import PageLayout from "src/layouts/page";
import { buildI18n } from "src/utils/i18n";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["home"])),
    },
});

const sections = ["hero", "about", "earn", "defi"];
const images = {
    hero: "preview-1.png",
    about: "preview-2.png",
};
export default function Home() {
    const { t } = useTranslation("home");
    return (
        <PageLayout title="Home">
            {sections.map((section, index) => (
                <PageSection
                    key={section}
                    title={t(`${section}.entry`)}
                    description={t(`${section}.desc`)}
                    cta={t(`${section}.cta`)}
                    reverse={index % 2 !== 0}
                >
                    {images[section] && (
                        <ImgStyle
                            $src={`/images/${images[section]}`}
                            sx={{
                                width: "100%",
                                height: "600px",
                                backgroundPosition: "center",
                            }}
                        />
                    )}
                </PageSection>
            ))}
        </PageLayout>
    );
}
