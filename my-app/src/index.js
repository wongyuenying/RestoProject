import React from 'react';
import ReactDom from 'react-dom';
import { App } from "./App";
import {BrowserRouter} from "react-router-dom"
import 'firebase/analytics';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1BWHNc1bpsb3bp_mRXzXTSDnk0fuQ0wc",
  authDomain: "restoproject-7ea53.firebaseapp.com",
  projectId: "restoproject-7ea53",
  storageBucket: "restoproject-7ea53.appspot.com",
  messagingSenderId: "112658952874",
  appId: "1:112658952874:web:f7c2adc1737447aa3296d3",
  measurementId: "G-WY45519GW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"));



