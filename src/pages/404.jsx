import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ErrorImg from "src/assets/svgs/error404.svg";
import PageLayout from "src/layouts/page";
import { buildI18n } from "src/utils/i18n";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, [])),
    },
});

const NotFoundPage = () => {
    return (
        <PageLayout title="This playlist is missing">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                }}
            >
                <Box sx={{ margin: "20px" }}>
                    <ErrorImg />
                </Box>
                <Link href="/app">
                    <Typography
                        variant="modal-title"
                        sx={{
                            color: "#EC950C",
                            cursor: "pointer",
                            "&:hover": {
                                color: "white",
                            },
                        }}
                    >
                        {"<<"} Back to home
                    </Typography>
                </Link>
            </Box>
        </PageLayout>
    );
};

export default NotFoundPage;
