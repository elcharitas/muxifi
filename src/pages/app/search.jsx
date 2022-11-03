import React from "react";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Box, Grid } from "@mui/material";
import { Heading } from "src/components";
import { RootStyle } from "src/components/styles";
import { ItemCard } from "src/components/widgets";
// import ArtisteImg from "src/assets/img/artisteImg.png";
import PlayListImg from "src/assets/img/trial2.png";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

// const data = [
//     {
//         id: 1,
//         color: "#F50D6E",
//         title: "podcast",
//     },
//     {
//         id: 2,
//         color: "#0DF540",
//         title: "made for you",
//     },
//     {
//         id: 3,
//         color: "#F5980D",
//         title: "charts",
//     },
//     {
//         id: 4,
//         color: "#0D6AF5",
//         title: "new release",
//     },
//     {
//         id: 5,
//         color: "#8F0DF5",
//         title: "discover",
//     },
//     {
//         id: 6,
//         color: "#F5370D",
//         title: "life events",
//     },
//     {
//         id: 7,
//         color: "#0DF5E7",
//         title: "afro",
//     },
//     {
//         id: 8,
//         color: "#F5B40D",
//         title: "pop",
//     },
//     {
//         id: 9,
//         color: "#B9F50D",
//         title: "christian & gospel",
//     },
//     {
//         id: 9,
//         color: "#C70DF5",
//         title: "soul",
//     },
//     {
//         id: 10,
//         color: "#0D6AF5",
//         title: "soul",
//     },
// ];

const SearchPage = () => {
    return (
        <AppLayout title="Search">
            <RootStyle>
                <Box>
                    <Heading
                        sx={{ mb: 6 }}
                        title="Recent Searches"
                        size="modal-title"
                    />

                    <Grid
                        container
                        spacing="18px"
                        sx={{ "& > *": { margin: "1%!important" } }}
                    >
                        {[1, 2, 3].map((item) => (
                            <ItemCard
                                key={item}
                                title="Album name"
                                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                image={PlayListImg}
                            />
                        ))}
                    </Grid>
                </Box>

                {/* <Box sx={{ mt: "36px" }}>
                    <Heading
                        sx={{ mb: "24px" }}
                        title="Browse All"
                        size="modal-title"
                    />

                    <Grid container spacing="18px">
                        {data.map((item) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                key={item.id}
                            >
                                <SearchCard
                                    img={ArtisteImg}
                                    title={item.title}
                                    cardColor={item.color}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box> */}
            </RootStyle>
        </AppLayout>
    );
};

export default SearchPage;
