import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2flP43nwqZjGHLZaCGaMKTRLML-jjqlw",
  authDomain: "cart-56a7a.firebaseapp.com",
  projectId: "cart-56a7a",
  storageBucket: "cart-56a7a.appspot.com",
  messagingSenderId: "426551055084",
  appId: "1:426551055084:web:b413b11a7c1fd72bbecbc9"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
