import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from '@mui/material/colors';

const Profile = ({name}) => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                flexDirection: 'column'
            }}>
                <Avatar sx={{
                    bgcolor: deepOrange[500],
                    width: 100,
                    height: 100
                }}>N</Avatar>
                <Typography variant="h6">
                    {name}
                </Typography>
            </Box>

        </>
    );
}

export default Profile;