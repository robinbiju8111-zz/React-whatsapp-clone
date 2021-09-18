import React from 'react';
import "./Sidebar.css";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChats from './SidebarChats';
import db from './firebase.js';
import { useState, useEffect } from 'react';



function Sidebar() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        db.collections('rooms').onSnapshot((snapshot) => (
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),

                }
                )))
        ));
}, []);
    
    return (
        <div className="sidebar_main">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            
            <div className="sidebar_search">
                <div className="searchbar_search_container">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start a new chat"></input>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChats addNewChat/>
                {rooms.map(room => (
                    <SidebarChats key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}


export default Sidebar;
