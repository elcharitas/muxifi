import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const buildI18n = (locale, ns) => {
    return serverSideTranslations(locale, ["common", "account", ...ns]);
};
