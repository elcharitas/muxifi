import { Box } from "@mui/material";
import { ConnectButton as RainbowConnect } from "@rainbow-me/rainbowkit";
import { useTranslation } from "next-i18next";
import { Button } from "../Button";
import { SvgIcon } from "../SvgIcon";

export const ConnectButton = () => {
    const { t } = useTranslation("account");
    return (
        <RainbowConnect.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                if (!mounted) return null;
                if (!account || chain?.unsupported) {
                    return (
                        <Button
                            onClick={
                                chain?.unsupported
                                    ? openChainModal
                                    : openConnectModal
                            }
                        >
                            {t(chain?.unsupported ? "wrongNetwork" : "connect")}
                        </Button>
                    );
                }
                return (
                    <Button
                        color="tertiary"
                        sx={{ py: 0.5, pl: 0.5, fontSize: 15 }}
                        onClick={openAccountModal}
                    >
                        <Box
                            sx={{
                                p: 0.7,
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "background.default",
                                borderRadius: "50%",
                                mr: 1,
                            }}
                        >
                            <SvgIcon name="wallet-check" size="24px" />
                        </Box>
                        {account.displayName}
                    </Button>
                );
            }}
        </RainbowConnect.Custom>
    );
};
