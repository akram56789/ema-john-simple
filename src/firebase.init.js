// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbEFi2tH3-pTvpJozxx9jkuPNQHCo0cS0",
  authDomain: "ema-jhon-simple-3896e.firebaseapp.com",
  projectId: "ema-jhon-simple-3896e",
  storageBucket: "ema-jhon-simple-3896e.appspot.com",
  messagingSenderId: "233634718165",
  appId: "1:233634718165:web:4fe0759ddef629cf4b1d5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;