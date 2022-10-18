import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { RootWidgetStyle } from "src/components/styles";
import Img from "src/assets/img/trial2.png";

export const PlaylistCard = ({ title }) => (
    <RootWidgetStyle>
        <Box>
            <Image
                alt={title}
                src={Img}
                width={202}
                height={202}
                marginBottom={24}
            />
            <Box>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography variant="body3" component="p">
                    + Collect Playlist.
                </Typography>
            </Box>
        </Box>
    </RootWidgetStyle>
);
