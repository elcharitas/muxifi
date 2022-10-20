import { Html, Head, Main, NextScript } from "next/document";
import { CONFIG } from "src/config";
import { i18n } from "next-i18next.config";

const Document = ({ __NEXT_DATA__: { locale } }) => {
    return (
        <Html lang={locale || i18n.defaultLocale}>
            <Head />
            <body>
                <Main />
                <style>{`[data-rk]{ --rk-fonts-body: "${CONFIG.THEME.DEFAULT_FONT}", sans-serif !important;}`}</style>
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
