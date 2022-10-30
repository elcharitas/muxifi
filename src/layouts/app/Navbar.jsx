import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import { CONFIG } from "src/config";
import { ConnectButton, Search } from "src/components";
import { NavItems } from "../NavItems";

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: "transparent",
    backdropFilter: "blur(6px)",
    [theme.breakpoints.up("lg")]: {
        width: `calc(100% - ${CONFIG.UI.APP_SIDEBAR_WIDTH}px)`,
    },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: 80,
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
        minHeight: 100,
        padding: theme.spacing(0, 5),
    },
}));

const Navbar = ({ onOpenSidebar }) => {
    const { t } = useTranslation();
    return (
        <RootStyle>
            <ToolbarStyle>
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

                <NavItems
                    items={[
                        {
                            label: t("nav.playlist"),
                            href: "/app/playlists",
                        },
                        {
                            label: t("nav.podcast"),
                            href: "/app/podcasts",
                        },
                        {
                            label: t("nav.artiste"),
                            href: "/app/artistes",
                        },
                        {
                            label: t("nav.album"),
                            href: "/app/albums",
                        },
                    ]}
                />

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: 0.5, sm: 1.5 }}
                >
                    <Search />
                    <ConnectButton />
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    );
};

export default Navbar;
