import AppLayout from "src/layouts/app";
import { RootStyle } from "src/components/styles";
import { CreaterPlaylistheader, PlaylistSmallCards } from "src/components/widgets";
import { Box, styled, Typography } from "@mui/material";
import BrokenClose from "src/assets/svgs/broken-close-icon.svg";
import SearchIcon from "src/assets/svgs/search-icon.svg";
import CloseIcon from "src/assets/svgs/close-icon.svg";

const SearchBox = styled(Box)({
    border: "1px dashed #565D5A",
    margin: "0 0 36px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 632,
    padding: "14px",
    borderRadius: 48,
});

const SearchInput = styled("input")({
    width: "90%",
    outline: "none",
    background: "transparent",
    border: "none",
    fontWeight: 300,
    fontSize: "16.67px",
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
                <CreaterPlaylistheader />

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
                        <Typography
                            variant="hero-title"
                            color="tertiary.light"
                        >Let find more songs for your playlist
                        </Typography>
                        <BrokenClose />
                    </Box>

                    <SearchBox>
                        <SearchIcon />
                        <SearchInput type="text" placeholder="Search for music" />
                        <CloseIcon />
                    </SearchBox>

                    <PlaylistSmallCards />
                    {/* FIXME: Remove lines below */}
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />
                    <PlaylistSmallCards />

                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CreateHomePage;
