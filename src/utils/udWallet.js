import UAuth from "@uauth/js";
import { CONFIG } from "src/config";

const uauth = new UAuth({
    clientID: CONFIG.WAGMI.UNSTOPPABLE_ID,
    redirectUri: CONFIG.APP.URL,
    scope: "openid wallet",
});

const UD_CONFIG = {
    id: "unstoppable",
    theme: "#0c2f78",
    icon:
        "https://storage.googleapis.com/unstoppable-client-assets/images/favicon/icon.svg",
};

export const udWallet = () => ({
    id: UD_CONFIG.id,
    name: "Login with Unstoppable",
    iconUrl: UD_CONFIG.icon,
    iconBackground: UD_CONFIG.theme,
    createConnector: () => ({
        connector: {
            id: UD_CONFIG.id,
            ready: true,
            connect() {
                return JSON.parse(localStorage.getItem("unstoppable"));
            },
            disconnect() {
                localStorage.removeItem("unstoppable");
                return uauth.logout();
            },
            getAccount() {
                return this.connect()?.address;
            },
            async getChainId() {
                const auth = await uauth.loginWithPopup();
                const ud = JSON.stringify({
                    account: auth.idToken.sub,
                    address: auth.idToken.wallet_address,
                });
                localStorage.setItem("unstoppable", ud);
            },
            isAuthorized() {
                return !!this.getAccount();
            },
            on() {},
        },
    }),
});
