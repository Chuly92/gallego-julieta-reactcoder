import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyBoSnVsNHg-AlgAO1jNcoDSxtYefkcGAOI",
  authDomain: "react-coder-ea22e.firebaseapp.com",
  projectId: "react-coder-ea22e",
  storageBucket: "react-coder-ea22e.appspot.com",
  messagingSenderId: "607693416710",
  appId: "1:607693416710:web:b7873625e9fb6a47831687"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
