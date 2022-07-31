// import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { useState } from 'react';
import{getAuth, GoogleAuthProvider,signInWithPopup,} from 'firebase/auth'
// import firebase from 'firebase/app';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

import firestore from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAMX1AUpZKCpvISOpofmibDYfK-2vNh67M",
  authDomain: "reatfirebase.firebaseapp.com",
  projectId: "reatfirebase",
  storageBucket: "reatfirebase.appspot.com",
  messagingSenderId: "1019824437882",
  appId: "1:1019824437882:web:55112283f0f7b3ff4259c3",
  measurementId: "G-SZTG3LS8YM"
};
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const Provider= new GoogleAuthProvider()
const googleSignIn=()=>{
  signInWithPopup(auth , Provider).then((result)=>{
    if (firebase.auth().currentUser !== null) 
        console.log("user id: " + firebase.auth().currentUser.uid);
        const name=result.user.displayName
        const email=result.user.email
        
        const photo=result.user.photoURL
        localStorage.setItem("name", name)
        localStorage.setItem('photo', photo)
        localStorage.setItem("email",email)
        // alert('sign in successfully')
        
    }).catch((error)=>{
        console.log(error)
    })
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
 const db=getFirestore(app)

export {auth ,googleSignIn,db}