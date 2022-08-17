import{auth, googleSignIn} from '../firebse-config'
import { useState } from 'react';
import * as React from "react";


function Google() {
  return (
    <div>
      
     <div>
     
    {/* <button  onClick={googleSignIn} type="button" className="login-with-google-btn" >
  Sign in with Google
</button> */}
    <button onClick={()=>auth.signOut()} type="button" className="login-with-google-btn ml-72 m-4 bg-red-300" >
  Sign out Google
</button>
    



     </div>
    </div>
  );
}

export default Google;
