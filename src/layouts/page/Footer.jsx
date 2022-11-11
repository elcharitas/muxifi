import { styled } from "@mui/material/styles";
import { Stack, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { GitHub, Twitter, Mail } from "@mui/icons-material";
import { useTranslation } from "next-i18next";
import { Anchor, SvgIcon } from "src/components";
import { CONFIG } from "src/config";

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
    GITHUB: CONFIG.APP.SOCIAL.GITHUB,
    TWITTER: CONFIG.APP.SOCIAL.TWITTER,
    MAIL: CONFIG.APP.SOCIAL.MESSAGE,
};

const MENU = [
    {
        title: "company",
        items: {
            about: "/about",
            contact: CONFIG.APP.SOCIAL.MESSAGE,
            music: "/app/albums",
        },
    },
    {
        title: "community",
        items: {
            developers: "/coming-soon",
            adverts: "/coming-soon",
            partners: "/coming-soon",
        },
    },
    {
        title: "links",
        items: {
            webapp: "/app",
            mobileapp: "/coming-soon",
        },
    },
];

const PageFooter = () => {
    const { t } = useTranslation("footer");
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
                            href={SOCIAL_LINKS.GITHUB}
                            variant="social-icon"
                        >
                            <GitHub />
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
                {MENU.map(({ title, items }) => (
                    <Stack key={title} direction="column">
                        <Typography variant="h5" gutterBottom>
                            {t(`menu.${title}`)}
                        </Typography>
                        {Object.entries(items).map(([value, link]) => (
                            <Anchor
                                key={value}
                                href={link}
                                variant="footer-link"
                            >
                                {t(`common:nav.${value}`)}
                            </Anchor>
                        ))}
                    </Stack>
                ))}
            </ToolbarStyle>
        </AppBar>
    );
};

export default PageFooter;
