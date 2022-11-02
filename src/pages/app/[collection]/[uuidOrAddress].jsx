import React from "react";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Box, Typography } from "@mui/material";
import { Search } from "src/components";
import { RootStyle } from "src/components/styles";
import { ItemBoardSmall, ItemHeader } from "src/components/widgets";
import BrokenClose from "src/assets/svgs/broken-close-icon.svg";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

const CollectionListing = () => {
    return (
        <AppLayout title="Artistes">
            <RootStyle>
                <ItemHeader />

                <Box sx={{ padding: "0 36px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "43px 0",
                            borderTop: "1px solid #2B3530",
                        }}
                    >
                        <Typography variant="hero-title" color="tertiary.light">
                            Let find more songs for your playlist
                        </Typography>
                        <BrokenClose />
                    </Box>

                    <Search sx={{ mb: 3, width: 600 }} />

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <ItemBoardSmall key={item} />
                    ))}
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CollectionListing;
