import { FileUploadOutlined } from "@mui/icons-material";
import {
    Box,
    FormHelperText,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useRef } from "react";

export const FileUpload = ({
    label,
    exts = ["jpg", "jpeg", "png", "gif"],
    error,
    onChange,
    onDragEnter,
    onDragLeave,
}) => {
    const fileInputRef = useRef();
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "13rem",
                    border: "1px dashed grey",
                    borderRadius: "20px",
                    cursor: "pointer",
                }}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDragLeave}
                onClick={() => fileInputRef.current.click()}
            >
                <Stack
                    justifyContent="center"
                    sx={{ p: 1, textAlign: "center" }}
                >
                    <div>
                        <FileUploadOutlined />
                    </div>
                    <Typography variant="body2" component="span">
                        {label}
                    </Typography>
                    <Typography variant="body1" component="span">
                        <strong>Supported Files</strong>
                    </Typography>
                    <Typography variant="body2" component="span">
                        {exts.join(", ").toUpperCase()}
                    </Typography>
                </Stack>
                <TextField
                    inputProps={{ ref: fileInputRef }}
                    type="file"
                    sx={{ display: "none" }}
                    onChange={onChange}
                />
            </Box>

            {error && (
                <FormHelperText
                    sx={{ textAlign: "center", my: 1 }}
                    error={!!error}
                >
                    {error.message}
                </FormHelperText>
            )}
        </>
    );
};
