// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3mgi2p0dYaBecWXvc6aPyPtTYrrvnO8M",
  authDomain: "sweetty-13c20.firebaseapp.com",
  projectId: "sweetty-13c20",
  storageBucket: "sweetty-13c20.appspot.com",
  messagingSenderId: "378067588372",
  appId: "1:378067588372:web:9b36d072b5ec2ddf5a1e01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
