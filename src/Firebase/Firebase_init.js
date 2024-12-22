// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {

apiKey:import.meta.env.VITE_apiKey,
authDomain:import.meta.env.VITE_authDomain,
projectId:import.meta.env.VITE_projectId,
storageBucket:import.meta.env.VITE_storageBucket,
messagingSenderId:import.meta.env.VITE_messagingSenderId,
appId:import.meta.env.VITE_appId 

 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth



 //   apikey: "AIzaSyDuSicLOETZxX4uq0H8k8FEdY428l9EHNc",
//   authDomain:"assingment11lostfound.firebaseapp.com",
//   projectId:"assingment11lostfound",
//   storageBucket:"assingment11lostfound.firebasestorage.app",
//   messagingSenderId:"430257779366",
//   appId:"1:430257779366:web:553aadf296acbc449c7a67"