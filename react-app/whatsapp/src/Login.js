import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import './Login.css';

export default function login() {
    const signIn=() => {
        auth .signInWithPopup(provider).then((result)=>console.log(result)).catch((error)=> alert(error.message))
    }
    return (
        <div className="login">

            <div className="logo container">
                <img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png" />
            </div>
            <div className="signin_text">
                <h2>Sign in to whatsapp</h2>
            </div>
            <div className="button">
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
            
        </div>
    )
}

