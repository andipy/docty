import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUJG6YZmr44QILjwzB5LIgk60GGqnyqIU",
  authDomain: "docty-chat-test.firebaseapp.com",
  databaseURL: "https://docty-chat-test-default-rtdb.firebaseio.com",
  projectId: "docty-chat-test",
  storageBucket: "docty-chat-test.appspot.com",
  messagingSenderId: "919142266520",
  appId: "1:919142266520:web:0ede0705311eb4c02182ed"
};

// Initialize Firebase, auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };