import { Box, Typography } from "@mui/material";

export const Heading = ({ title, size, sx }) => {
    return (
        <Box sx={{ mt: 0, color: "palette.tertiary.main", ...sx }}>
            <Typography variant={size}>
                {title}
            </Typography>
        </Box>
    );
};
