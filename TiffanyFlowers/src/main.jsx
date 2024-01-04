import React from 'react'
import "core-js/stable"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTma3IeikOvOjP3YdTFHLu0GjXdl5xim4",
  authDomain: "coderapi-cc9a6.firebaseapp.com",
  projectId: "coderapi-cc9a6",
  storageBucket: "coderapi-cc9a6.appspot.com",
  messagingSenderId: "827953761446",
  appId: "1:827953761446:web:5cf206350a21069e523867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
