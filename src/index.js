import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom"
import { router } from './router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA4XL-bMghZWYk4eZS-s-B97Ujxen35QZI",
  authDomain: "simonpine-design.firebaseapp.com",
  projectId: "simonpine-design",
  storageBucket: "simonpine-design.appspot.com",
  messagingSenderId: "464773155610",
  appId: "1:464773155610:web:d8208afa3cb36d6f78faa3",
  measurementId: "G-11LL5VWF31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
