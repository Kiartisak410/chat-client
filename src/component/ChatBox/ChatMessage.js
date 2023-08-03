import { Send } from "@mui/icons-material";
import { Box, Divider, IconButton, TextField } from "@mui/material";
import { useState, useRef } from "react";

const ChatMessage = ({ onSend }) => {
    const [message, setMessage] = useState();
    const text = useRef();
    const onSubmit = () => {
        onSend(message)
        console.log(message)
        text.current.value = ''
    }

    return (
        <>
            <Divider />
            <Box
                sx={{
                    width: '100%',
                    padding: '1%'
                }}
            >
                <TextField
                    inputRef={text}
                    sx={{ width: '98%' }}
                    placeholder="Type Message Here..."
                    variant="standard"
                    onChange={(e) => setMessage(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={() => onSubmit()}>
                                <Send />
                            </IconButton>
                        )
                    }
                    }
                />
            </Box>
        </>
    );
}

export default ChatMessage;