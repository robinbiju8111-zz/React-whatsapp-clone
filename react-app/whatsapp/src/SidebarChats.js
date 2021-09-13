import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import { useEffect, useState } from 'react';

export default function SidebarChats() {
    const [seed, setseed] = useState('');
    useEffect(() => {
        setseed(Math.floor(Math.random()*5000))    
    
    }, [])



    return (
        <div className="sidebarChats">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebar_chatInfo">
                <h2>Room Name</h2>
                <p>Last msg</p>
            </div>
        </div>
    )
    
}

