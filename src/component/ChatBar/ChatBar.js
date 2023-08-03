import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";

const ChatBar = () => {
    return (
        <>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                        >
                            Chat App
                        </Typography>

                        {/* <Box sx={{ flexGrow: 0 }} >
                            <Typography>
                                test
                            </Typography>
                        </Box> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default ChatBar;