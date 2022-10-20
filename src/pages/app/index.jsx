import { Box, Grid, styled } from "@mui/material";
import { Heading, PlayList, PlaylistItem } from "src/components";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";

const RootStyle = styled("div")(({ theme }) => ({
    minHeight: "100%",
    overflow: "hidden",
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 36,
    backgroundColor: theme.palette.background.default,
}));

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const AppHomePage = () => {
    return (
        <AppLayout title="Welcome to MuxiFi">
            <RootStyle>
                <Box>
                    <Heading
                        sx={{ mb: "24px" }}
                        title="Welcome!"
                        size="hero-title"
                    />
                    <Grid container spacing="13px">
                        <PlaylistItem title="Recent Playlist" />
                        <PlaylistItem title="Recent Playlist" />
                        <PlaylistItem title="Recent Playlist" />
                        <PlaylistItem title="Recent Playlist" />
                        <PlaylistItem title="Recent Playlist" />
                        <PlaylistItem title="Recent Playlist" />
                    </Grid>
                </Box>

                {/* TODO: This would be removed once I have an array to loop through */}
                <PlayList title="Muxifi Playlists" size="hero-subtitle" />
                <PlayList title="Uniquely Yours" size="hero-subtitle" />
                <PlayList title="Focus" size="hero-subtitle" />
                <PlayList title="Mood" size="hero-subtitle" />
                <PlayList title="Popular New Release" size="hero-subtitle" />
            </RootStyle>
        </AppLayout>
    );
};

export default AppHomePage;
