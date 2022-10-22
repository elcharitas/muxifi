import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Anchor, Button, SvgIcon } from "src/components";
import { NavItems } from "../NavItems";

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: 80,
    background: "transparent",
    [theme.breakpoints.up("lg")]: {
        minHeight: 90,
        padding: theme.spacing(0, 8),
    },
}));

const PageNavbar = ({ onOpenSidebar }) => {
    const { t } = useTranslation();
    return (
        <AppBar
            sx={{
                boxShadow: "none",
                background: "transparent",
                backdropFilter: "blur(8px)",
            }}
        >
            <ToolbarStyle>
                <Stack>
                    <IconButton
                        onClick={onOpenSidebar}
                        sx={{
                            mr: 1,
                            color: "text.primary",
                            display: { lg: "none" },
                        }}
                    >
                        {/* <Menu /> */}
                    </IconButton>

                    <Anchor href="/" sx={{ height: 64 }}>
                        <SvgIcon name="logo" size={200} />
                    </Anchor>
                </Stack>

                <Box sx={{ flexGrow: 1 }} />
                <NavItems
                    items={[
                        {
                            label: t("nav.home"),
                            href: "/",
                        },
                        {
                            label: t("nav.about"),
                            href: "/about",
                        },
                        {
                            label: t("nav.contact"),
                            href: "/contact",
                        },
                    ]}
                />
                <Box sx={{ flexGrow: 1 }} />

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: 0.5, sm: 1.5 }}
                >
                    <Button>{t("nav.launch")}</Button>
                </Stack>
            </ToolbarStyle>
        </AppBar>
    );
};

export default PageNavbar;
