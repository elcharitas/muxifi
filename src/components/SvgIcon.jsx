import dynamic from "next/dynamic";
import { memo } from "react";

export const SvgIcon = memo(
    ({ name, size = "32", color, width, height, ...props }) => {
        const Icon = dynamic(() => import(`src/assets/svgs/${name}.svg`));
        return (
            <Icon width={width || size} height={height || size} {...props} />
        );
    },
);

SvgIcon.displayName = "SvgIcon";
