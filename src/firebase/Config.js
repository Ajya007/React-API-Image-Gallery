import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAC6E3876kBWzl-2waK4o_tMUqI4-Pzxq4",
    authDomain: "firegram-9084f.firebaseapp.com",
    projectId: "firegram-9084f",
    storageBucket: "firegram-9084f.appspot.com",
    messagingSenderId: "589888380246",
    appId: "1:589888380246:web:415f09a99059ce10ca4af7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore,timestamp}; 
