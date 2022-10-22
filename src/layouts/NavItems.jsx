import { Anchor, Button, Stackable } from "src/components";

export const NavItems = ({ items }) => {
    return (
        <Stackable>
            {items?.map((item) => (
                <Button
                    key={item.href}
                    variant="nav-item"
                    component={Anchor}
                    href={item.href}
                >
                    {item.label}
                </Button>
            ))}
        </Stackable>
    );
};
