import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import UserList from "../../component/UserList/UserList";
import socket from "../../socket";

const UserListData = ({ user }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUserList();
    }, [])

    const getUserList = async () => {
        const res = await fetch(`http://localhost:3002/users`, {
            method: "GET", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
        });

        res.json().then((data) => { console.log(data); setUsers(data) })
    }

    const onAddChat = (data) => {
        console.log(data)
        let joindata = [
            { username: user[0]?.username, uid: user[0]?.uid },
            { username: data.username, uid: data.uid }
        ]

        console.log(joindata)

        socket.emit('join user', joindata);
    }

    return (
        <>
            <Typography>
                List of User
            </Typography>
            <UserList onAddChat={(val) => onAddChat(val)} data={users} />
        </>
    );
}

export default UserListData;