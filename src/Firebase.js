import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsQnoRIc2WvKiEOiSWJJwudUGFcQIeXww",
  authDomain: "react-emart-34a86.firebaseapp.com",
  projectId: "react-emart-34a86",
  storageBucket: "react-emart-34a86.appspot.com",
  messagingSenderId: "867488210222",
  appId: "1:867488210222:web:130aae28c431362985eebf"
  };

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore()
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider } 
  