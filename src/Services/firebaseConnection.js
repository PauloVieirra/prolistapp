import firebase from 'firebase/app';
require('firebase/auth');
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDGpytIKW6i_yhWE7jnhHR-0o7bxxTx_JI",
  authDomain: "prolisted-deaa5.firebaseapp.com",
  projectId: "prolisted-deaa5",
  storageBucket: "prolisted-deaa5.appspot.com",
  messagingSenderId: "41644286846",
  appId: "1:41644286846:web:6cdab16ecd5118ce08092f"
};

  
 
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);  
  }

  export default firebase;
  


  
