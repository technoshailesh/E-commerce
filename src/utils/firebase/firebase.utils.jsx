import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import {
   getFirestore,
   doc,
   getDoc,
   setDoc,

} 
from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDQQsiwcjzh8QHO9nuB4G_XdD5tdp8eFks",
  authDomain: "shop-me-db-ede97.firebaseapp.com",
  projectId: "shop-me-db-ede97",
  storageBucket: "shop-me-db-ede97.appspot.com",
  messagingSenderId: "393656695695",
  appId: "1:393656695695:web:28cf058ca6c48d6adaa9fa",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);


export const db=getFirestore();
 export const createUserDocumentFromAuth = async(userAuth)=>{


    const userDocRef= doc(db,'users',userAuth.uid);
   
    console.log(userDocRef);

     const userSnapshot= await getDoc(userDocRef);
     console.log(userSnapshot);
   if(!userSnapshot.exists())
   {
     const { displayName , email } = userAuth;

     const createdAt = new Date();
  

   try{
     await setDoc(userDocRef,{
       displayName,
       email,
       createdAt
     });
   }  catch(error){
     console.log("error creating the user",error.message);
   }
   }
   return userDocRef;
};