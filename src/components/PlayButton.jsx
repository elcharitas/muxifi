import PlaySVG from "src/assets/svgs/play.svg";
import { Button } from "./Button";

export const PlayButton = ({ isPlaying, onClick }) => (
    <Button sx={{ width: "48px", borderRadius: "50%" }} onClick={onClick}>
        <PlaySVG />
    </Button>
);
