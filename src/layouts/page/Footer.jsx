import { styled } from "@mui/material/styles";
import { Stack, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Facebook, Twitter, Mail } from "@mui/icons-material";
import { useTranslation } from "next-i18next";
import { Anchor, SvgIcon } from "src/components";

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: 80,
    background: "transparent",
    justifyContent: "space-around",
    alignItems: "start",
    [theme.breakpoints.up("lg")]: {
        minHeight: 90,
        padding: theme.spacing(20, 30),
    },
}));

const SOCIAL_LINKS = {
    FACEBOOK: "",
    TWITTER: "",
    MAIL: "",
};

const PageFooter = () => {
    const { t } = useTranslation("footer");
    const menu = t("menu", { returnObjects: true });
    return (
        <AppBar
            sx={{
                boxShadow: "none",
                background: "transparent",
                backdropFilter: "blur(8px)",
            }}
            position="static"
        >
            <ToolbarStyle>
                <Stack direction="column">
                    <Anchor
                        href="/"
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <SvgIcon name="logo" size={200} height={80} />
                    </Anchor>
                    <Stack direction="row" spacing={2}>
                        <IconButton
                            LinkComponent={Anchor}
                            href={SOCIAL_LINKS.FACEBOOK}
                            variant="social-icon"
                        >
                            <Facebook />
                        </IconButton>
                        <IconButton
                            LinkComponent={Anchor}
                            href={SOCIAL_LINKS.TWITTER}
                            variant="social-icon"
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton
                            LinkComponent={Anchor}
                            href={SOCIAL_LINKS.MAIL}
                            variant="social-icon"
                        >
                            <Mail />
                        </IconButton>
                    </Stack>
                </Stack>
                {menu.map(({ title, items }) => (
                    <Stack key={title} direction="column">
                        <Typography variant="h5" gutterBottom>
                            {title}
                        </Typography>
                        {items.map((nav) => (
                            <Anchor
                                key={nav.link}
                                href={nav.link}
                                variant="footer-link"
                            >
                                {nav.title}
                            </Anchor>
                        ))}
                    </Stack>
                ))}
            </ToolbarStyle>
        </AppBar>
    );
};

export default PageFooter;
