import { Add } from "@mui/icons-material";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const UserList = ({ data, onAddChat }) => {

    return (
        <>
            <List>
                {
                    data?.map((val) => {
                        return (
                            <>
                                <ListItem
                                    secondaryAction={
                                        <IconButton onClick={() => onAddChat(val)}>
                                            <Add />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            U
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={val.name} />
                                    
                                </ListItem>
                            </>
                        );
                    })
                }
            </List>

        </>
    );
}

export default UserList;