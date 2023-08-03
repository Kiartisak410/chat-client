import { Box, Typography } from "@mui/material";

const NotFound = () => {
    return(
        <>
            <Box sx={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                height: '100%'
            }}>
                <Typography variant="h1">
                    Error 404
                </Typography>
                <Typography variant="h1">
                    Page Not Found
                </Typography>
            </Box>
        </>
    );
}

export default NotFound;