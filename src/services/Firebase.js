import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';
import React from "react";

initializeApp({
  apiKey: "AIzaSyBoSnVsNHg-AlgAO1jNcoDSxtYefkcGAOI",
  authDomain: "react-coder-ea22e.firebaseapp.com",
  projectId: "react-coder-ea22e",
  storageBucket: "react-coder-ea22e.appspot.com",
  messagingSenderId: "607693416710",
  appId: "1:607693416710:web:b7873625e9fb6a47831687",
});

//Get Firestore
export const db = getFirestore();

//Collections
export const orderCollection = collection(db, "orders");
export const categoryCollection = collection(db, "categories");
export const itemCollection = collection(db, "items");

export const Firebase = () => {
  return <></>;
};
