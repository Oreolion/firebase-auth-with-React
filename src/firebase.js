// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV1SiMUKrUZ9fptrWh0n3kpF5joMpPPJs",
  authDomain: "fir-auth-7e3b1.firebaseapp.com",
  projectId: "fir-auth-7e3b1",
  storageBucket: "fir-auth-7e3b1.appspot.com",
  messagingSenderId: "963368134938",
  appId: "1:963368134938:web:67854e7c98bc4e729ca4a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;

