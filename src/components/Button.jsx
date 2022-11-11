import { Button as MUIButton, CircularProgress } from "@mui/material";

export const Button = ({
    children,
    variant = "contained",
    isLoading,
    disabled,
    sx,
    ...props
}) => (
    <MUIButton
        variant={variant}
        sx={{
            borderRadius: "52px",
            textTransform: "capitalize",
            fontWeight: "bold",
            ...sx,
        }}
        disabled={disabled || isLoading}
        {...props}
    >
        {isLoading && <CircularProgress size="20px" sx={{ mr: 2 }} />}
        {children}
    </MUIButton>
);
