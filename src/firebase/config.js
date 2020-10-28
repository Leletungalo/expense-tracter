import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAisTJ3ecdZvFRaP4-jMoqVz1pwfcY08o4",
    authDomain: "expense-tracker-a9ad4.firebaseapp.com",
    databaseURL: "https://expense-tracker-a9ad4.firebaseio.com",
    projectId: "expense-tracker-a9ad4",
    storageBucket: "expense-tracker-a9ad4.appspot.com",
    messagingSenderId: "671810631166",
    appId: "1:671810631166:web:96e1156c75bb13488f3caf",
    measurementId: "G-T3YT1D4ML7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorege = firebase.storage();
const projectDatabese = firebase.firestore();
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectAuth,projectDatabese,projectStorege,timestamp}