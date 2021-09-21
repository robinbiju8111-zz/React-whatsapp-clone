import { Avatar, IconButton } from '@material-ui/core'
import "./Chats.css"
import { React, useEffect, useState } from 'react';
import { AttachFile, InsertEmoticon, Mic, MoreVert, Search } from '@material-ui/icons';
import { useParams } from 'react-router';
import db from './firebase';
import firebase from 'firebase/compat/app';
import { useStateValue } from './StateProvider';


export default function Chats() {
    const [input, setinput]= useState("")
    const [seed, setseed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [{ user }, dispatch] = useStateValue();


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))

            db.collection("rooms").doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
        }
        
        
    }, [roomId])

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    
    }, [roomId]);

    const sendMsg= (e) => {
        e.preventDefault();
        console.log("you typeddddd", input)
        db.collection("rooms").doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setinput("")
    }

    return (
        <div className="chats">
        <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_header_info">
                    <h3>{ roomName }</h3>
                    <p>last scene {""}
                        { new Date(messages[messages.length - 1]?.timestamp?.toDate()).toLocaleTimeString()}</p>
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
                {messages.map((message) => (
                    <p className={`chat_msg ${ message.name === user.displayName && 'chat_receiver'}`}>
                    <span className="msg_person_name">
                        {message.name}
                    </span>
                        {message.message}
                        <span className="msg_timestamp">
                            
                        {new Date(message.timestamp?.toDate()).toLocaleTimeString()}
                    </span>
                    </p>
                ))}
                
                
                
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
