import React from 'react'
import {auth} from '../firebse-config'
import Google from './Google'
import { googleSignIn } from '../firebse-config'

function SignOut() {
  return (
    <div>
        {/* <Google/> */}
        <button  onClick={googleSignIn} type="button" className="login-with-google-btn" >
  Sign in with Google
</button>
        {/* <button onClick={()=>{auth.signOut() 
            alert('sihn')}}>signOut</button> */}
    </div>
  )
}

export default SignOut