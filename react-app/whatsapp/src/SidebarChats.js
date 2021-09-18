import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChats.css'
import { useEffect, useState } from 'react';
import db from './firebase';
import { Link } from 'react-router-dom';

export default function SidebarChats( { id, name, addNewChat } ) {
    const [seed, setseed] = useState("");
    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    
    }, []);

    const createChat = () => {
        const roomName = prompt("Enter new room name");

        if (roomName) {
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to ={`/rooms/${id}`}>
        <div className="sidebarChats">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebar_chatInfo">
                <h2>{ name }</h2>
                <p>Last msg</p>
            </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChats">
            <h2>Create new chat</h2>
        </div>
    );
    
}

