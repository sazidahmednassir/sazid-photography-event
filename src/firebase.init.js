// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC5qIlbbYlHzA0G0ac4A9wlfC6sdwdUtU",
  authDomain: "sazid-photography-event.firebaseapp.com",
  projectId: "sazid-photography-event",
  storageBucket: "sazid-photography-event.appspot.com",
  messagingSenderId: "1008923245523",
  appId: "1:1008923245523:web:f9eef1f26253c2850e8d26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;