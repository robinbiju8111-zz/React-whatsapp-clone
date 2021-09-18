import { Avatar, IconButton } from '@material-ui/core'
import "./Chats.css"
import { React, useEffect, useState } from 'react';
import { AttachFile, InsertEmoticon, Mic, MoreVert, Search } from '@material-ui/icons';
import { useParams } from 'react-router';
import db from './firebase';

export default function Chats() {
    const [input, setinput]= useState("")
    const [seed, setseed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("")

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
        
        
    }, [roomId])

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    
    }, []);

    const sendMsg= (e) => {
        e.preventDefault();
        console.log("you typeddddd", input)
        setinput("")
    }

    return (
        <div className="chats">
        <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_header_info">
                    <h3>{ roomName }</h3>
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
                <p className="chat_msg">
                <span className="msg_person_name">
                    robin
                </span>
                    hai hello helo
                <span className="msg_timestamp">
                    22.22pm
                </span>
                </p>
                
                
        </div>
        <div className="chat_footer">
                <InsertEmoticon />
                <form action="">
                    <input value={input} onChange={(e) => setinput(e.target.value)} type="text" placeholder="Type mesaage here" />
                    <button onClick={sendMsg}>Send a message</button>
                </form>
                <Mic />
        </div>
        </div>
    )
}
