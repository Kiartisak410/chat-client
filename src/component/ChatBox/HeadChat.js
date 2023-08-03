import { AppBar, Box, Divider, Typography } from "@mui/material";

const HeadChat = ({ chatName }) => {

    return (
        <>
            <Box
                sx={{
                    padding:'2%'
                }}
            >
                <Typography variant="h6">
                    {chatName}
                </Typography>
            </Box>
            <Divider />
        </>
    );
}

export default HeadChat;