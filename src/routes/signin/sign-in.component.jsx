import React from 'react';
import { signInwithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser= async()=>{
   const {user}=await signInwithGooglePopup();
  
  const userDocRef=createUserDocumentFromAuth(user)
  }
  return (

    <> <div>sign in page </div>
    <button onClick={logGoogleUser}>
         Sign in with Google Popup

    </button></>
   
  )
}

export default SignIn;
