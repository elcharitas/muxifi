import { Button as MUIButton } from "@mui/material";

export const Button = ({ children, sx, ...props }) => (
    <MUIButton
        sx={{
            borderRadius: "52px",
            textTransform: "capitalize",
            ...props.sx,
        }}
        {...props}
    >
        {children}
    </MUIButton>
);
