import React from "react";
import { buildI18n } from "src/utils/i18n";
import { Box, Grid } from "@mui/material";
import { Heading } from "src/components";
import { RootStyle } from "src/components/styles";
import AppLayout from "src/layouts/app";
import ArtisteImg from "src/assets/img/artisteImg.png";
import { PlaylistCard } from "src/components/widgets";

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
                        sx={{ mb: "24px" }}
                        title="Artistes"
                        size="modal-title"
                    />

                    <Grid container spacing="18px">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                            (item) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    key={item}
                                >
                                    <PlaylistCard
                                        title="Artiste name"
                                        desc="Artiste"
                                        image={ArtisteImg}
                                        isCollected
                                        sx={{ borderRadius: "50%" }}
                                    />
                                </Grid>
                            ),
                        )}
                    </Grid>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default ArtistePage;
