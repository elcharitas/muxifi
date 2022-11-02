import React from "react";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Box, Grid } from "@mui/material";
import { Heading } from "src/components";
import { RootStyle } from "src/components/styles";
import { ItemCard } from "src/components/widgets";
import AlbumImg from "src/assets/img/albumImg.png";
import { CollectionCard } from "src/components/collections";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const AlbumsPage = () => {
    return (
        <AppLayout title="Artistes">
            <RootStyle>
                <Box>
                    <Heading sx={{ mb: 6 }} title="Albums" size="modal-title" />

                    <Grid
                        container
                        spacing="18px"
                        sx={{ "& > *": { margin: "1%!important" } }}
                    >
                        <CollectionCard
                            title="Favorite Episodes"
                            sx={{ backgroundColor: "#CC0C0C" }}
                        />
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <ItemCard
                                key={item}
                                title="Album name"
                                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                image={AlbumImg}
                                isCollected
                            />
                        ))}
                    </Grid>
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default AlbumsPage;
