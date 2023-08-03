import { Box, Container, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import Login from "../component/Login/Login";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import socket from "../socket";

const LoginPage = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        socket.on('login',(val) => {
            console.log(val)
            const data = JSON.stringify(val)
            sessionStorage.setItem('user', data)
            navigate(`/chat/${val[0].uid}`)
        })
    },[socket])

    const onLogin = () => {
        console.log(`username : ${username} password : ${password}`)
        socket.emit('login', username, password)
    }

    return (
        <>
            <Login username={(val) => setUserName(val)} password={(val) => setPassword(val)} onSubmit={() => onLogin()}/>
        </>
    );
}

export default LoginPage;