import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChats.css'
import { useEffect, useState } from 'react';

export default function SidebarChats( { addNewChat } ) {
    const [seed, setseed] = useState("");
    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    
    }, []);

    const createChat = () => {
        const roomName = prompt("Enter new room name");

        if (roomName) {
            //do it later
        }
    };

    return !addNewChat ? (
        <div className="sidebarChats">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebar_chatInfo">
                <h2>Room Name</h2>
                <p>Last msg</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChats">
            <h2>Create new chat</h2>
        </div>
    );
    
}

