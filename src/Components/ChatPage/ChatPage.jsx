import React from 'react'
import socketClient  from "socket.io-client";
import Chat from './Chat';
const SERVER = "http://127.0.0.1:8080";

const ChatPage = () => {

    var socket = socketClient (SERVER);
    return (
        <div style={{margin: "150px auto", height: "400px", width: "80%"}}>
            <h5 style={{textAlign: "left"}}>Chat panel</h5>
            <Chat />
        </div>
    )
}

export default React.memo(ChatPage)
