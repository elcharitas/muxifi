import PlaySVG from "src/assets/svgs/play.svg";
import NextSVG from "src/assets/svgs/next.svg";
import PrevSVG from "src/assets/svgs/prev.svg";
import HeartSVG from "src/assets/svgs/heart.svg";
import ShuffleSVG from "src/assets/svgs/shuffle.svg";
import { Button } from "./Button";

const BUTTON_ICONS = {
    play: PlaySVG,
    next: NextSVG,
    prev: PrevSVG,
    heart: HeartSVG,
    shuffle: ShuffleSVG,
};

export const ControlButton = ({
    icon = "play",
    sx = {},
    onClick,
    disabled = false,
    variant = "contained",
}) => {
    const Icon = BUTTON_ICONS[icon];
    return (
        <Button
            sx={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                padding: 0,
                minWidth: "30px",
                ...sx,
            }}
            onClick={(e) => {
                e.preventDefault();
                onClick?.(e);
            }}
            variant={variant}
            disabled={disabled}
        >
            <Icon />
        </Button>
    );
};

export const PlayButton = ({ isPlaying, onClick }) => (
    <ControlButton
        onClick={(e) => {
            e.preventDefault();
            onClick?.(e);
        }}
        disabled={isPlaying}
    />
);
