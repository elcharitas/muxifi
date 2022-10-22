import { useRouter } from "next/router";
import { Anchor, Button, Stackable } from "src/components";

export const NavItems = ({ items }) => {
    const router = useRouter();
    return (
        <Stackable>
            {items?.map((item) => (
                <Button
                    key={item.href}
                    variant="nav-item"
                    component={Anchor}
                    href={item.href}
                    className={router.pathname === item.href ? "active" : ""}
                >
                    {item.label}
                </Button>
            ))}
        </Stackable>
    );
};
