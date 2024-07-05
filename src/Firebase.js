import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdf3Iy7kZJTHk5dPueBc7JHesi-MqmcYA",
  authDomain: "fir-auth-31a8d.firebaseapp.com",
  projectId: "fir-auth-31a8d",
  storageBucket: "fir-auth-31a8d.appspot.com",
  messagingSenderId: "107699818614",
  appId: "1:107699818614:web:aac4ce0009efc489164f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;