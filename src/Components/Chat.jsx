import React from 'react'
import Google from './Google'
import SignOut from './SignOut'
import { useState ,useEffect} from 'react'
import {db,auth} from '../firebse-config'
import { collection, onSnapshot,getDoc, getDocs } from 'firebase/firestore'


function Chat(props) {
;

//   const usercoolectionRef=collection(db,'messages')
//   const query = db.collection('armaan').orderBy('createdAt').limit(100);
// console.log(query)
 
   
 
  return (
    <div>
<SignOut/>

      {/* <h1>chat</h1> */}
     
     
   
    
      </div>
  )
}

export default Chat