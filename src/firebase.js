import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCDMEkhRPHVj3089imCMq9C-l9FbV2gqzE",
    authDomain: "e-commerce-fadd7.firebaseapp.com",
    projectId: "e-commerce-fadd7",
    storageBucket: "e-commerce-fadd7.appspot.com",
    messagingSenderId: "1004296302046",
    appId: "1:1004296302046:web:8c460901f61f413c25c14f",
    measurementId: "G-WBYKCDVN2S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };