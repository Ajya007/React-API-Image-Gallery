import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCpGlirWzp_Gyydm8G9YrpJoR04RGFyyfg",
    authDomain: "firespace-6ab5a.firebaseapp.com",
    projectId: "firespace-6ab5a",
    storageBucket: "firespace-6ab5a.appspot.com",
    messagingSenderId: "334738634897",
    appId: "1:334738634897:web:303868c9e358195189e730"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore,timestamp}; 
