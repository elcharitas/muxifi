import { Box, Typography } from "@mui/material";

export const Heading = ({ title, subtitle, size, sx }) => {
    return (
        <Box sx={{ mt: 0, color: "palette.tertiary.main", ...sx }}>
            <Typography variant={size} sx={{ display: "block" }}>
                {title}
            </Typography>
            {subtitle && <Typography variant="p">{subtitle}</Typography>}
        </Box>
    );
};
