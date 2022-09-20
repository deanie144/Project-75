import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDkZEjA1JRM3MVCkC8JiGQGU8fSxoXE_u0",
  authDomain: "project-71-9b424.firebaseapp.com",
  projectId: "project-71-9b424",
  storageBucket: "project-71-9b424.appspot.com",
  messagingSenderId: "846231121625",
  appId: "1:846231121625:web:d36e56e9214d98b86dd8c8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
