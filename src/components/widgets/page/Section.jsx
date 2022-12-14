import { Box, Container, Typography } from "@mui/material";
import { Anchor, Button, Stackable } from "src/components";

export const PageSection = ({
    title,
    description,
    cta,
    href,
    reverse,
    children,
}) => {
    return (
        <Container sx={{ mb: 20 }}>
            <Stackable reverse={reverse}>
                <Box sx={{ maxWidth: "350px", px: 2 }}>
                    <Typography variant="section-title">{title}</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {description}
                    </Typography>
                    {cta && (
                        <Button component={Anchor} href={href} size="large">
                            {cta}
                        </Button>
                    )}
                </Box>
                <Box
                    sx={{
                        minWidth: "30%",
                        minHeight: "40%",
                    }}
                >
                    {children}
                </Box>
            </Stackable>
        </Container>
    );
};
