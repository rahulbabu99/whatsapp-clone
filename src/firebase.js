import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmu86p2YO334bo3xe9kXfHU90Ty6_uEDI",
  authDomain: "whatsapp-clone-4f6d4.firebaseapp.com",
  projectId: "whatsapp-clone-4f6d4",
  storageBucket: "whatsapp-clone-4f6d4.appspot.com",
  messagingSenderId: "571538350516",
  appId: "1:571538350516:web:70004b8eb87eebfa8052e1"
};

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  const db = app.firestore();
  
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, googleProvider };
  
  export default db;
  