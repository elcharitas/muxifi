import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { useControl } from "src/hooks";
import { Button } from "src/components/Button";
import { Heading } from "src/components/Heading";
import { ItemCard } from "./ItemCard";

const HeadingWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
});

export const PlayList = ({ title, size, records }) => {
    const { t } = useTranslation("playlist");
    const { setTrack } = useControl();
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
                        },
                    }}
                >
                    {t("more")}
                </Button>
            </HeadingWrapper>

            <Grid
                container
                spacing="13px"
                sx={{ "& > *": { margin: "1%!important" } }}
            >
                {records.map((item) => (
                    <ItemCard
                        key={item.id}
                        title={item.name}
                        type="playlists"
                        desc={item.description}
                        handlePlay={() => setTrack("id", item)}
                    />
                ))}
            </Grid>
        </Box>
    );
};
