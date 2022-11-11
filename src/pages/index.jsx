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

const sections = Object.entries({
    hero: { image: "preview-1.png", href: "/app" },
    about: { image: "preview-2.png", href: "/app" },
    defi: { image: "", href: "/app" },
});

export default function Home() {
    const { t } = useTranslation("home");
    return (
        <PageLayout title="Home">
            {sections.map(([section, { image, href }], index) => (
                <PageSection
                    key={section}
                    title={t(`${section}.entry`)}
                    description={t(`${section}.desc`)}
                    cta={t(`${section}.cta`)}
                    reverse={index % 2 !== 0}
                    href={href}
                >
                    {image && (
                        <ImgStyle
                            $src={`/images/${image}`}
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
