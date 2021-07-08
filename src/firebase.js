// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoQ6ag5KiFfsATMYjzT-WHgvf4nRIHo34",
  authDomain: "happy-body-2cedf.firebaseapp.com",
  projectId: "happy-body-2cedf",
  storageBucket: "happy-body-2cedf.appspot.com",
  messagingSenderId: "491905451898",
  appId: "1:491905451898:web:0bcbd3c692175f364d38c3",
  measurementId: "G-1R6LQ7P9CG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
