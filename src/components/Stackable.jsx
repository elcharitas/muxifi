import { Stack } from "@mui/material";

export const Stackable = ({ children, sx, ...props }) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            justifyContent="space-between"
            spacing={1}
            sx={{
                "&::after": {
                    content: `" "`,
                    width: "100%",
                },
                "& > *": {
                    flex: "1 1 auto",
                    alignSelf: "auto",
                },
            }}
            {...props}
        >
            {children}
        </Stack>
    );
};
