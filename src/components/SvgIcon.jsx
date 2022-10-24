import dynamic from "next/dynamic";

export const SvgIcon = ({
    name,
    size = "32",
    color,
    width,
    height,
    ...props
}) => {
    const Icon = dynamic(() => import(`src/assets/svgs/${name}.svg`));
    return <Icon width={width || size} height={height || size} {...props} />;
};
