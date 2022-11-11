import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RootWidgetStyle } from "src/components/styles";
import { PlayButton } from "src/components/ControlButton";

const Textbox = styled(Typography)({
    variant: "h5",
    marginLeft: 17,
    fontWeight: 700,
    fontSize: { xs: 14, md: 18 },
});

export const ItemBoard = ({ title, image }) => (
    <Grid item xs={12} sm={4} md={3}>
        <RootWidgetStyle sx={{ width: { xs: "100%", md: "max-content" } }}>
            <Image alt="" src={image || "/images/icon.svg"} width="70" height="70" />
            <Textbox>{title}</Textbox>
            <div className="root-btn">
                <PlayButton />
            </div>
        </RootWidgetStyle>
    </Grid>
);
