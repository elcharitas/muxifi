import { useRouter } from "next/router";
import { Anchor, Button, Stackable } from "src/components";

export const NavItems = ({ items, sx }) => {
    const router = useRouter();
    return (
        <Stackable sx={sx}>
            {items?.map((item) => (
                <Button
                    key={item.href}
                    variant="nav-item"
                    component={Anchor}
                    href={item.href}
                    className={router.asPath === item.href ? "active" : ""}
                >
                    {item.label}
                </Button>
            ))}
        </Stackable>
    );
};
