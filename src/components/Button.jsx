import { Button as MUIButton } from "@mui/material";

export const Button = ({ children, variant = "contained", sx, ...props }) => (
    <MUIButton
        variant={variant}
        sx={{
            borderRadius: "52px",
            textTransform: "capitalize",
            fontWeight: "bold",
            ...sx,
        }}
        {...props}
    >
        {children}
    </MUIButton>
);
