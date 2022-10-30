import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ErrorImg from "src/assets/svgs/error404.svg";

const NotFoundPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "#E4E4E4",
                height: "100vh",
                width: "100vw",
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
                            color: "#272727",
                        },
                    }}
                >
                    {"<<"} Back to home
                </Typography>
            </Link>
        </Box>
    );
};

export default NotFoundPage;
