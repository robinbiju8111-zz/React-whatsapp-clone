import React from 'react';
import "./Sidebar.css";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChats from './SidebarChats';




function Sidebar() {
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
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
            </div>
        </div>
    )
}


export default Sidebar;
