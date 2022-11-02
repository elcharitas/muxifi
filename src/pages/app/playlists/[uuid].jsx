import AppLayout from "src/layouts/app";
import { RootStyle } from "src/components/styles";
import { ItemHeader, ItemBoardSmall } from "src/components/widgets";
import { Box, Typography } from "@mui/material";
import BrokenClose from "src/assets/svgs/broken-close-icon.svg";
import { buildI18n } from "src/utils/i18n";
import { Search } from "src/components/Search";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const CreateHomePage = () => {
    return (
        <AppLayout title="Create Playlist">
            <RootStyle
                sx={{
                    paddingLeft: 0,
                    paddingRight: 0,
                }}
            >
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

export default CreateHomePage;
