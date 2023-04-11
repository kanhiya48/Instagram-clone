// Import the functions you need from the SDKs you need
import { initializeApp ,getApps,getApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnuChshpEGsvDDxdseHOOyHaxf6RQuVus",
  authDomain: "insta-2-6d66d.firebaseapp.com",
  projectId: "insta-2-6d66d",
  storageBucket: "insta-2-6d66d.appspot.com",
  messagingSenderId: "872240640731",
  appId: "1:872240640731:web:57a447ead351aeb84ad2fe"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db=getFirestore();
const storage=getStorage();
export {app,db,storage};