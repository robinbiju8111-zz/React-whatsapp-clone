/* eslint-disable no-empty-pattern */
import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';


export default function login() {
    // eslint-disable-next-line no-empty-pattern
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ }, dispatch] = useStateValue();


    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,

                });
            }).catch((error) => alert(error.message))
    };


    return (
        <div className="login">

            <div className="logo container">
                <img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png" alt="WA_Logo"/>
            </div>
            <div className="signin_text">
                <h2>Sign in to WhatsApp</h2>
            </div>
            <div className="button">
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
            
        </div>
    )
}

