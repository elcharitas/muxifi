import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Box, Typography } from "@mui/material";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { Button } from "src/components";
import AppLayout from "../app";

const AccessLayout = ({ onNavigate, title, children }) => {
    const { address } = useAccount();
    const [hasAccess, setHasAccess] = useState(true);
    const { openConnectModal } = useConnectModal();

    useEffect(() => {
        if (address) {
            setHasAccess(true);
        }
    }, [address]);

    useEffect(() => {
        Promise.resolve(onNavigate?.())
            .then((access) => {
                if (!access) openConnectModal?.();
                else setHasAccess(true);
            })
            .catch(openConnectModal);
    }, [onNavigate, openConnectModal]);

    return (
        <AppLayout title={title}>
            {hasAccess ? (
                children
            ) : (
                <Box>
                    <Typography variant="h5" gutterBottom>
                        You&apos;re not connected 🥲
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        To give you a personalized experience, we need you to
                        connect to your wallet
                    </Typography>
                    <Button onClick={openConnectModal}>Connect Wallet</Button>
                </Box>
            )}
        </AppLayout>
    );
};

export default AccessLayout;
