
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXex5esD3Kqo0BtsYoV-0I0uT1vxuI8e4",
  authDomain: "instagram-clone-8abae.firebaseapp.com",
  projectId: "instagram-clone-8abae",
  storageBucket: "instagram-clone-8abae.appspot.com",
  messagingSenderId: "164051139640",
  appId: "1:164051139640:web:dd56fa86b1bf2bf436bacd",
  measurementId: "G-XG5NT7L71Y"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);