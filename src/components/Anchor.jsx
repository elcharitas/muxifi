import NextLink from "next/link";
import { Link } from "@mui/material";

export const Anchor = ({ children, href, ...props }) => {
    return (
        <NextLink href={href} passHref>
            <Link {...props}>
                <>{children}</>
            </Link>
        </NextLink>
    );
};
