import { Box, Grid, styled } from "@mui/material";
import {
    Heading,
    PlayList,
    // PlaylistCard,
    PlaylistItem,
} from "src/components";

const RootStyle = styled("div")(({ theme }) => ({
    minHeight: "100%",
    overflow: "hidden",
    paddingLeft: 36,
    paddingRight: 36,
    backgroundColor: theme.palette.background.default,
}));

const HomePage = () => {
    return (
        <RootStyle>
            <Box>
                <Heading title="Welcome!" size="h4" />
                <Grid container spacing="13px">
                    <PlaylistItem title="Recent Playlist" />
                    <PlaylistItem title="Recent Playlist" />
                    <PlaylistItem title="Recent Playlist" />
                    <PlaylistItem title="Recent Playlist" />
                    <PlaylistItem title="Recent Playlist" />
                    <PlaylistItem title="Recent Playlist" />
                </Grid>
            </Box>

            {/* This would be removed once I have an array to loop through */}
            <PlayList title="Muxifi Playlists" size="h6" />
            <PlayList title="Uniquely Yours" size="h6" />
            <PlayList title="Focus" size="h6" />
            <PlayList title="Mood" size="h6" />
            <PlayList title="Popular New Release" size="h6" />

        </RootStyle>
    );
};

export default HomePage;
