import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiZToqFqIKz2yWuIv3K6ZPTgsyCNfPXeY",
  authDomain: "e-ride-71.firebaseapp.com",
  projectId: "e-ride-71",
  storageBucket: "e-ride-71.appspot.com",
  messagingSenderId: "406970875589",
  appId: "1:406970875589:web:47e019932dffff7373faac"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


