import { buildI18n } from "src/utils/i18n";
import { Box, Grid } from "@mui/material";
import { Heading } from "src/components";
import { RootStyle } from "src/components/styles";
import AppLayout from "src/layouts/app";
import ArtisteImg from "src/assets/img/artisteImg.png";
import { ItemCard } from "src/components/widgets";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const ArtistePage = () => {
    return (
        <AppLayout title="Artistes">
            <RootStyle>
                <Box>
                    <Heading
                        sx={{ mb: 6 }}
                        title="Artistes"
                        size="modal-title"
                    />

                    <Grid
                        container
                        spacing="18px"
                        sx={{ "& > *": { margin: "1%!important" } }}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <ItemCard
                                key={item}
                                title="Artiste name"
                                desc="Artiste"
                                image={ArtisteImg}
                                isCollectible
                                sx={{ borderRadius: "50%" }}
                            />
                        ))}
                    </Grid>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default ArtistePage;
