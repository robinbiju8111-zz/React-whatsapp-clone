import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9sO-k_vq5tqFQqsJcv7p00l8nx3AZkuo",
    authDomain: "whatsapp-clone-ba953.firebaseapp.com",
    projectId: "whatsapp-clone-ba953",
    storageBucket: "whatsapp-clone-ba953.appspot.com",
    messagingSenderId: "993453969587",
    appId: "1:993453969587:web:e02b97492b7b3e901360c6",
    measurementId: "G-SWXB1JJNE9"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
