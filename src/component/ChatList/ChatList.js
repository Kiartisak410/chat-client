import { Group, Person } from "@mui/icons-material";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const ChatList = ({ data, onSelect }) => {
    return (
        <>
            <List>
                {
                    data?.map((val, index) => {
                        return (
                            <>
                                {
                                    val?.room[0].type === 'private' ?
                                        val?.user[0] ?
                                        <ListItemButton key={index} onClick={() => onSelect(val)}>
                                            <ListItemIcon>
                                                <Person />
                                            </ListItemIcon>
                                            <ListItemText primary={val.user[0]?.name} />
                                        </ListItemButton>
                                        :
                                        null
                                        :
                                        <ListItemButton key={index} onClick={() => onSelect(val)}>
                                            <ListItemIcon>
                                                <Group />
                                            </ListItemIcon>
                                            <ListItemText primary={val.room[0].roomname} />
                                        </ListItemButton>
                                }

                            </>
                        );
                    })
                }
            </List>
        </>
    );
}

export default ChatList;