import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';


const firebaseConfig = {
    apiKey: "AIzaSyDU9zY--tNT_dC2q7wYGYT48tIds5aPmKY",
    authDomain: "adornelegance-7820d.firebaseapp.com",
    projectId: "adornelegance-7820d",
    storageBucket: "adornelegance-7820d.appspot.com",
    messagingSenderId: "5147981303",
    appId: "1:5147981303:web:545d9d45860f210f226af2",
    measurementId: "G-JNDYY9W22C"
};

firebase.initializeApp(firebaseConfig);
/*
if (window.location.hostname === "localhost") {
    firebase.functions().useEmulator("localhost", 5001);
  }
 */ 
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
export { db, auth, functions };