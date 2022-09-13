import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, Timestamp, FieldValue } from 'firebase/firestore';

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
const db = getFirestore(app);

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

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user);
    // ...
  } else {
    // User is signed out
    // ...
    console.log('user is signed out');
  }
});

export { loginWithGoogle, auth, db };