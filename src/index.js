import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKB_ZklIuslyfKpooujt6q8HgNVQAVwfI",
  authDomain: "team-cedar.firebaseapp.com",
  projectId: "team-cedar",
  storageBucket: "team-cedar.firebasestorage.app",
  messagingSenderId: "136433968910",
  appId: "1:136433968910:web:dfdb82a15cdb1c52cc995f",
  measurementId: "G-PQ2XC13VNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)