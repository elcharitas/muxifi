import { useRef } from "react";
import { Box, styled, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import NoteIcon from "src/assets/svgs/note-icon.svg";
import CloseIcon from "src/assets/svgs/close-icon.svg";
import BinanceIcon from "src/assets/svgs/binance-icon.svg";
import { Button } from "src/components";
import {
    IconBox,
    MessageInput,
    SearchInput,
    TextBox,
} from "src/components/styles";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: "72px",
};

const NumberBox = styled("div")({
    width: "85px",
    display: "flex",
    alignItems: "center",
    padding: "13px 8px",
    backgroundColor: "secondary.dark",
    borderRadius: "12px",
    marginRight: "8px",
});

export const ItemModal = ({ onClose, open, collection, type, handleSave }) => {
    const titleRef = useRef(collection.name);
    const descriptionRef = useRef(collection.description);
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    zIndex: 10000,
                }}
            >
                <Box sx={style}>
                    <Typography variant="modal-title" marginBottom="48">
                        Edit Playlist
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            marginBottom: 1,
                        }}
                    >
                        <IconBox sx={{ width: "224px", height: "224px" }}>
                            <NoteIcon />
                        </IconBox>

                        <Box sx={{ width: "418px", marginLeft: "36px" }}>
                            <TextBox>
                                <SearchInput
                                    type="text"
                                    placeholder="My Playlist"
                                    defaultValue={collection.name}
                                    onChange={(e) => {
                                        titleRef.current = e.target.value;
                                    }}
                                    sx={{
                                        "&::placeholder": { color: "#AAAEAC" },
                                    }}
                                />
                                <CloseIcon />
                            </TextBox>

                            <TextBox sx={{ alignItems: "flex-start" }}>
                                <MessageInput
                                    defaultValue={collection.description}
                                    onChange={(e) => {
                                        descriptionRef.current = e.target.value;
                                    }}
                                    placeholder="Add an optional description"
                                />
                                <CloseIcon />
                            </TextBox>

                            <TextBox
                                sx={{
                                    justifyContent: "flex-end",
                                    padding: 0,
                                    marginBottom: 0,
                                    border: "none",
                                    marginTop: 2,
                                    borderRadius: 0,
                                }}
                            >
                                {type === "albums" && (
                                    <NumberBox>
                                        <BinanceIcon />
                                        <SearchInput
                                            type="number"
                                            placeholder="12"
                                        />
                                    </NumberBox>
                                )}

                                <Button
                                    onClick={() => {
                                        handleSave({
                                            title: titleRef.current,
                                            description: descriptionRef.current,
                                        });
                                    }}
                                >
                                    Save Playlist
                                </Button>
                            </TextBox>
                        </Box>
                    </Box>

                    <Typography variant="body2">
                        By proceeding, you agree to give Muxifi access to the
                        image you choose to upload. Please make sure you have
                        the right to upload the image.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};
