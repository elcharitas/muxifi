import dynamic from "next/dynamic";

export const SvgIcon = ({ name, size = "32", color, ...props }) => {
    const Icon = dynamic(() => import(`src/assets/svgs/${name}.svg`));
    return <Icon width={size} height={size} {...props} />;
};
