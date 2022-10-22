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
        <Container sx={{ my: 10 }}>
            <Stackable reverse={reverse}>
                <Box sx={{ maxWidth: "350px" }}>
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
                <Box sx={{ minWidth: "30%", minHeight: "30%" }}>{children}</Box>
            </Stackable>
        </Container>
    );
};
