import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

import { auth } from '../services/firebase';
import { signOut } from "firebase/auth";

import Nav from "../components/Nav";
import Container from "../components/Container";
import Button from "../components/Button";

const Profile = () => {

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const handleSignOut = (e) => {
        e.preventDefault();  
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            setCurrentUser(null);
            navigate('/login');
        }).catch((error) => {
            // An error happened.
            console.log('An error happened');
        });
    };

    // object with the data about the logout button
    const buttonLogout = {
        label: 'Logout',
        style: 'w-full border-solid border-2 border-teal-900 text-teal-900 mt-3 py-3 rounded-lg font-semibold',
        disabled: false
    }

    return (
        <>
        <Nav />
        <Container>
            <div className="mt-8 mb-8">
                    <div>You are {currentUser.email}</div>
                    <Button
                        button={buttonLogout}
                        onClickFunction={handleSignOut}
                    />
                </div>
        </Container>
        </>
    )
}

export default Profile;