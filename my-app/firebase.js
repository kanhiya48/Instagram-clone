// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsjNtM-SFj2RgPWTmOQeSFR8WTQnzd2kE",
  authDomain: "instagram-2-145ba.firebaseapp.com",
  projectId: "instagram-2-145ba",
  storageBucket: "instagram-2-145ba.appspot.com",
  messagingSenderId: "473330640076",
  appId: "1:473330640076:web:7fe2d66fbfc5b1813b0e69",
  measurementId: "G-KHJ4Y4PFKH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db =getFirestore();
const analytics = getAnalytics(app);

export { app,db,storage};