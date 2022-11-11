import { Alert, Typography } from "@mui/material";

export const PageFeature = ({ title, description, color, Icon }) => {
    return (
        <Alert
            variant="outlined"
            severity={color}
            icon=" "
            sx={{
                width: { xs: "100%", md: "300px" },
                minHeight: "250px",
                borderRadius: "12px",
            }}
        >
            {Icon && <Icon sx={{ fontSize: "100px", color }} />}
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
        </Alert>
    );
};
