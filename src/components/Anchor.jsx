import NextLink from "next/link";
import Image from "next/image";
import { Link, Stack, Typography } from "@mui/material";

export const Anchor = ({ children, href, label, icon, sx, ...props }) => {
    return (
        <NextLink href={href} passHref>
            <Link sx={{ textDecoration: "none", ...sx }} {...props}>
                <Stack direction="row" spacing={1}>
                    {icon && (
                        <Image
                            src={`/assets/svgs/${icon}.svg`}
                            width={27}
                            height={27}
                        />
                    )}
                    {label && <Typography>{label}</Typography>}
                    {children}
                </Stack>
            </Link>
        </NextLink>
    );
};
