import { useTranslation } from "next-i18next";
import { Container, Stack, Typography } from "@mui/material";
import { PageSection } from "src/components/widgets";
import { ImgStyle } from "src/components/styles";
import PageLayout from "src/layouts/page";
import { buildI18n } from "src/utils/i18n";
import { Stackable } from "src/components";
import { PageFeature } from "src/components/widgets/page/Feature";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["home"])),
    },
});

const sections = Object.entries({
    hero: { image: "preview-1.png", href: "/app" },
    about: { image: "preview-2.png", href: "/app/playlists" },
    defi: { image: "", href: "/app/albums" },
});

const featureColor = ["error", "success", "warning"];

export default function Home() {
    const { t } = useTranslation("home");
    const features = t("features", { returnObjects: true });
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
            <Container>
                <Stack alignItems="center">
                    <Typography variant="section-title">
                        {features.entry}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 4 }}>
                        {features.desc}
                    </Typography>
                </Stack>
                <Stackable>
                    {features.items.map(({ title, desc }, id) => (
                        <PageFeature
                            key={title}
                            title={title}
                            description={desc}
                            color={featureColor[id]}
                        />
                    ))}
                </Stackable>
            </Container>
        </PageLayout>
    );
}
