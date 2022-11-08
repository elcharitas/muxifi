import { useState, useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import ProfileIcon from "src/assets/svgs/profile-circle.svg";
import CloseIcon from "src/assets/svgs/close-icon.svg";
import { Button } from "src/components";
import {
    IconBox,
    MessageInput,
    SearchInput,
    TextBox,
} from "src/components/styles";
import { useCollection, useNFTStorage } from "src/hooks";
import { useTranslation } from "next-i18next";

export const CreatorModal = ({ onClose, open, creator }) => {
    const nameRef = useRef(creator.name);
    const bioRef = useRef(creator.bio);
    const { t } = useTranslation("studio");
    const [data, setData] = useState();
    const { metadata } = useNFTStorage(data);
    const { writeAsync } = useCollection({
        method: "join",
        args: [metadata.url],
        type: "artiste",
        skip: !metadata.url,
    });

    useEffect(() => {
        if (metadata.url) {
            writeAsync?.().finally(() => setData(undefined));
        }
    }, [writeAsync, metadata]);

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
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: "72px",
                    }}
                >
                    <Typography variant="modal-title" marginBottom="48">
                        {t("creator.title")}
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
                            <ProfileIcon />
                        </IconBox>

                        <Box sx={{ width: "418px", marginLeft: "36px" }}>
                            <TextBox>
                                <SearchInput
                                    type="text"
                                    placeholder="John Doe"
                                    defaultValue={creator.name}
                                    onChange={(e) => {
                                        nameRef.current = e.target.value;
                                    }}
                                    sx={{
                                        "&::placeholder": { color: "#AAAEAC" },
                                    }}
                                />
                                <CloseIcon />
                            </TextBox>

                            <TextBox sx={{ alignItems: "flex-start" }}>
                                <MessageInput
                                    defaultValue={creator.bio}
                                    onChange={(e) => {
                                        bioRef.current = e.target.value;
                                    }}
                                    placeholder={t("creator.bio")}
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
                                <Button
                                    onClick={() => {
                                        setData({
                                            name: nameRef.current,
                                            description: bioRef.current,
                                            image: null,
                                        });
                                    }}
                                    isLoading={!!data}
                                >
                                    {t("creator.submit")}
                                </Button>
                            </TextBox>
                        </Box>
                    </Box>

                    <Typography variant="body2">
                        {t("creator.agreement")}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};
