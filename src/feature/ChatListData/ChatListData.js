import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ChatList from "../../component/ChatList/ChatList";

const ChatListData = ({ id, onSelect }) => {
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        console.log(id)
        getChatList()
    }, []);

    const getChatList = async () => {
        console.log(id)
        const res = await fetch(`http://localhost:3002/chat-list`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uid: parseInt(id)
            })
        })

        res.json().then((data) => { console.log(data); setChatList(data) })
    }

    return (
        <>
            <ChatList data={chatList} onSelect={onSelect} />
        </>
    );
}

export default ChatListData;