import React, { useState, useEffect, useContext, createContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setCurrentUser(user);
            // ...
        } else {
            // User is signed out
            // ...
            console.log('user is signed out');
        }
    });

    console.log(currentUser, 'cicca');

    return (
        <AuthContext.Provider value={{currentUser}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}