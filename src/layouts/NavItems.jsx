import { Anchor, Button, Stackable } from "src/components";

export const NavItems = ({ items }) => {
    return (
        <Stackable>
            {items?.map((item, id) => (
                <Button
                    key={String(id)}
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
