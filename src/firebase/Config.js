import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBA62ifkodZs_8xK97oGmzv2UuUxW9hV0k",
    authDomain: "fire-gram-94244.firebaseapp.com",
    projectId: "fire-gram-94244",
    storageBucket: "fire-gram-94244.appspot.com",
    messagingSenderId: "42465729584",
    appId: "1:42465729584:web:faef6672d82b49e8f421f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore,timestamp}; 
