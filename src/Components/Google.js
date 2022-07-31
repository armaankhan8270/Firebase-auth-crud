import{auth, googleSignIn} from '../firebse-config'
import { useState } from 'react';
import * as React from "react";


function Google() {
  return (
    <div>
      
     <div>
     
     <h1  className='bg-info col-12 text-center' >Chat App</h1>
    {/* <button  onClick={googleSignIn} type="button" className="login-with-google-btn" >
  Sign in with Google
</button> */}
    <button onClick={()=>auth.signOut()} type="button" className="login-with-google-btn" >
  Sign out Google
</button>
    
    <h1 className='ml-5 bg-primary col-4'>{localStorage.getItem("name")}</h1>
    <h1>{localStorage.getItem("email")}</h1>
    <img src={localStorage.getItem('photo')} alt="" />



     </div>
    </div>
  );
}

export default Google;
