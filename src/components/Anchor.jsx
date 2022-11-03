import NextLink from "next/link";
import { forwardRef } from "react";
import { Link, Stack, Typography } from "@mui/material";
import { SvgIcon } from "./SvgIcon";

const Anchor = forwardRef(
    (
        {
            children,
            href = "",
            label,
            icon,
            sx,
            labelProps,
            stackProps,
            ...props
        },
        ref,
    ) => (
        <NextLink href={href} passHref>
            <Link ref={ref} sx={{ textDecoration: "none", ...sx }} {...props}>
                <Stack direction="row" alignItems="center" spacing={1.5} {...stackProps}>
                    {icon && <SvgIcon name={icon} />}
                    {label && <Typography {...labelProps}>{label}</Typography>}
                    {children}
                </Stack>
            </Link>
        </NextLink>
    ),
);

Anchor.displayName = "Anchor";

export { Anchor };
