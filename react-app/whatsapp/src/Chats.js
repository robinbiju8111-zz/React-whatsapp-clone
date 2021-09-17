import { Avatar, IconButton } from '@material-ui/core'
import "./Chats.css"
import { React, useEffect, useState } from 'react';
import { AttachFile, MoreVert, Search } from '@material-ui/icons';


export default function Chats() {
    const [seed, setseed] = useState("");
    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    
    }, []);

    return (
        <div className="chats">
        <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_header_info">
                    <h3>Room name</h3>
                    <p>last scene</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <Search/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
        </div>
        <div className="chat_body">

        </div>
        <div className="chat_footer">
            
        </div>
        </div>
    )
}
