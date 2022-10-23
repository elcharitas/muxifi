import PlaySVG from "src/assets/svgs/play.svg";
import { Button } from "./Button";

export const PlayButton = ({ isPlaying, onClick }) => (
    <Button
        sx={{
            width: "40px",
            height: "40px",
            minWidth: "30px",
            borderRadius: "50%",
            padding: 0,
        }}
        onClick={onClick}
        disabled={isPlaying}
    >
        <PlaySVG />
    </Button>
);
