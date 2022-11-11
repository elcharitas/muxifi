import { Box, Grid } from "@mui/material";
import { useAccount } from "wagmi";
import { Heading } from "src/components";
import { RootStyle } from "src/components/styles";
import { PlayList, ItemBoard } from "src/components/widgets";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { useAccountPlaylist } from "src/hooks";
import { getItemImage } from "src/utils/formats";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

const AppHomePage = () => {
    const { address } = useAccount();
    const { records } = useAccountPlaylist(address);
    const { records: userRecords } = useAccountPlaylist(address, 12);
    const { records: muxifiRecords } = useAccountPlaylist(undefined, 12);
    return (
        <AppLayout title="Welcome to MuxiFi">
            <RootStyle>
                {records?.length > 0 && (
                    <Box>
                        <Heading
                            sx={{ mb: "24px" }}
                            title="Welcome!"
                            size="hero-title"
                        />
                        <Grid container spacing="13px">
                            {records.map((item) => (
                                <ItemBoard
                                    title={item.name}
                                    image={getItemImage(item.image)}
                                    key={item}
                                />
                            ))}
                        </Grid>
                    </Box>
                )}

                {muxifiRecords?.length > 0 && (
                    <PlayList
                        title="Muxifi Playlists"
                        size="hero-subtitle"
                        records={muxifiRecords}
                    />
                )}
                {userRecords?.length > 0 && (
                    <PlayList
                        title="Uniquely Yours"
                        size="hero-subtitle"
                        records={userRecords}
                    />
                )}
            </RootStyle>
        </AppLayout>
    );
};

export default AppHomePage;
