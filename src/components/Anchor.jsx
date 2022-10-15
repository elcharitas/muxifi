import NextLink from "next/link";
import Image from "next/image";
import { Link, Stack, Typography } from "@mui/material";

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
                <Stack direction="row" alignItems="center" spacing={1}>
                    {icon && (
                        <Image
                            src={`/assets/svgs/${icon}.svg`}
                            width={26}
                            height={26}
                        />
                    )}
                    {label && <Typography {...labelProps}>{label}</Typography>}
                    {children}
                </Stack>
            </Link>
        </NextLink>
    );
};
