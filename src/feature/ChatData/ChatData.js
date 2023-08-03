import { Box } from "@mui/material";
import HeadChat from "../../component/ChatBox/HeadChat";
import ChatMessage from "../../component/ChatBox/ChatMessage";
import ChatContent from "../../component/ChatBox/ChatContent";
import { useEffect, useState } from "react";

import socket from "../../socket";

const ChatData = ({ data, user }) => {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        socket.on('message', (message) => {
            console.log(message)
            getMessage();
        })
        console.log(data)
        getMessage();
    }, [data,socket])

    const getMessage = async () => {
        const res = await fetch(`http://localhost:3002/room-message`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                room: data?.room[0]?.roomname
            })
        })

        res.json().then((data) => { console.log(data); setMessage(data) })
    }

    const onSend = async (message) => {
        if (message) {
            socket.emit('message', {
                sender: user,
                message: message,
                chat_type: data?.room[0]?.type,
                room: data?.room[0]?.roomname,
                message_type: 'm',
                time: Date.now()
            })
        }
    }

    return (
        <>
            {
                data ?
                    <Box
                        sx={{
                            border: '1px #d7d6d6 solid',
                            borderRadius: '5px',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        {
                            data?.room[0]?.type === 'private' ?
                                <HeadChat chatName={data?.user[0]?.name} />
                                :
                                <HeadChat chatName={data?.room[0]?.roomname} />
                        }

                        <ChatContent user={user} data={message} />
                        <ChatMessage onSend={(val) => onSend(val)} />
                    </Box>
                    :
                    null
            }

        </>
    );
}

export default ChatData;