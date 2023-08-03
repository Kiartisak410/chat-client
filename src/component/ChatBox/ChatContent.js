import { Box, Chip, Typography } from "@mui/material";

const ChatContent = ({ data, user }) => {

    return (
        <>
            <Box sx={{
                height: '39rem',
                padding: '2%',
                overflowY: 'scroll'
            }}>
                {
                    data?.map((val) => {
                        return (
                            <>
                                {
                                    val?.sender === user ?
                                        <Box
                                            sx={{
                                                marginTop: '2%',
                                                marginBottom: '2%',
                                                textAlign: 'right'
                                            }}
                                        >
                                            <Chip
                                                size="string"
                                                label={val?.message}
                                                color="primary"
                                            />
                                        </Box>
                                        :
                                        <Box
                                            sx={{
                                                marginTop: '2%',
                                                marginBottom: '2%',
                                                textAlign: 'left'
                                            }}
                                        >
                                            <Chip
                                                size="string"
                                                label={val?.message}
                                            />
                                        </Box>
                                }

                            </>
                        );
                    })
                }
            </Box>
        </>
    );
}

export default ChatContent;