import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "src/components/Button";
import { Heading } from "../../Heading";
import { PlaylistCard } from "./PlaylistCard";

const HeadingWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
});

export const PlayList = ({ title, size }) => {
    return (
        <Box mt="37.5px">
            <HeadingWrapper>
                <Heading title={title} size={size} />
                <Button
                    sx={{
                        backgroundColor: "background.default",
                        color: "tertiary.light",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: "tertiary.light",
                        "&:hover": {
                            border: "none",
                            color: "tertiary.dark",
                            // FIXME: enure to remove this
                        },
                    }}
                >See more
                </Button>
            </HeadingWrapper>

            <Grid container spacing="13px">
                <PlaylistCard title="Playlist Title" />
                <PlaylistCard title="Playlist Title" />
                <PlaylistCard title="Playlist Title" />
                <PlaylistCard title="Playlist Title" />
            </Grid>
        </Box>
    );
};
