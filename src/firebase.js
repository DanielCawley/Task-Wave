// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4puCNY3GuB2YKMwsC3nmQ3eD73aKwvK8",
  authDomain: "task-wave.firebaseapp.com",
  databaseURL:
    "https://task-wave-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "task-wave",
  storageBucket: "task-wave.appspot.com",
  messagingSenderId: "1092565062358",
  appId: "1:1092565062358:web:ea46fbf2c942ef044c2f77",
  measurementId: "G-R83FW9DKC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
