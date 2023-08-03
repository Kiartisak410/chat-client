import { AppBar, Container, Divider, Grid, Toolbar, Typography } from "@mui/material";
import ChatBar from "../component/ChatBar/ChatBar";
import Profile from "../component/Profile/Profile";
import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import ChatListData from "../feature/ChatListData/ChatListData";
import UserListData from "../feature/UserList/UserListData";
import ChatData from "../feature/ChatData/ChatData";
import socket from "../socket";

const ChatPage = () => {
    const [user, setUser] = useState([]);
    const [dataSelect, setDataSelect] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('user'))
        setUser(data)
        console.log(id)
    }, [])

    const onJoin = (val) => {
        socket.emit('join room', val?.room[0]?.roomname)
        setDataSelect(val); console.log(val)
    }


    return (
        <>
            <ChatBar />
            <Grid container spacing={2} sx={{
                marginTop: '3.5%'
            }}>
                <Grid item xs={3} sx={{
                    padding: '2%',
                    borderLeft: '1px #000 solid'
                }}>
                    <Profile name={user[0]?.name} />
                    <Divider sx={{
                        marginTop: '2%'
                    }} />
                    <ChatListData id={id} onSelect={(val) => onJoin(val)} />
                </Grid>
                <Grid item xs={7}>
                    <ChatData user={user[0]?.username} data={dataSelect} />
                </Grid>
                <Grid item xs={2}>
                    <UserListData user={user} />
                </Grid>
            </Grid>
        </>
    );
}

export default ChatPage;