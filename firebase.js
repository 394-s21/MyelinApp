import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCfQWvGnwih9JFpyL0ypAswUMSdEyD8AdE",
    authDomain: "myelinapp-513fb.firebaseapp.com",
    databaseURL: "https://myelinapp-513fb-default-rtdb.firebaseio.com",
    projectId: "myelinapp-513fb",
    storageBucket: "myelinapp-513fb.appspot.com",
    messagingSenderId: "936159143445",
    appId: "1:936159143445:web:2b03711a46dc9022f9501c"
};

firebase.initializeApp(firebaseConfig);

export { firebase };