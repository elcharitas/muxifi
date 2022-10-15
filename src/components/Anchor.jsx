import NextLink from "next/link";
import Image from "next/image";
import { Link, Stack, Typography } from "@mui/material";
import { SvgIcon } from "./SvgIcon";

export const Anchor = ({
    children,
    href,
    label,
    icon,
    sx,
    labelProps,
    ...props
}) => {
    return (
        <NextLink href={href} passHref>
            <Link sx={{ textDecoration: "none", ...sx }} {...props}>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    {icon && <SvgIcon name={icon} />}
                    {label && <Typography {...labelProps}>{label}</Typography>}
                    {children}
                </Stack>
            </Link>
        </NextLink>
    );
};
