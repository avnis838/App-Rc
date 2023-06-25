// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsLhLCl0exUxcIEJ8vr3TYOjs_HiCPMXo",
  authDomain: "app-intern-a9bf9.firebaseapp.com",
  projectId: "app-intern-a9bf9",
  storageBucket: "app-intern-a9bf9.appspot.com",
  messagingSenderId: "189908873337",
  appId: "1:189908873337:web:fd18d9664e08f4dcab24a8",
  measurementId: "G-FBKBSM2XG7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
