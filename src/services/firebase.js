import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUJG6YZmr44QILjwzB5LIgk60GGqnyqIU",
  authDomain: "docty-chat-test.firebaseapp.com",
  projectId: "docty-chat-test",
  storageBucket: "docty-chat-test.appspot.com",
  messagingSenderId: "919142266520",
  appId: "1:919142266520:web:0ede0705311eb4c02182ed"
};

// Initialize Firebase, auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

export { loginWithGoogle, auth, database };