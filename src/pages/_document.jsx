import { Html, Head, Main, NextScript } from "next/document";
import { CONFIG } from "src/config";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <style>{`[data-rk]{ --rk-fonts-body: "${CONFIG.THEME.DEFAULT_FONT}", sans-serif !important;}`}</style>
                <NextScript />
            </body>
        </Html>
    );
}
