import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';

// import components
import Nav from '../components/Nav';
import Appbar from "../components/Appbar";
import Container from "../components/Container";

import EmptyPrivateChats from "../assets/icons/chats-empty.svg";

const PrivateChats = () => {

    const navigate = useNavigate();

    const [privateChats, setPrivateChats] = useState(null);

    return (
        <div>
            <Nav />
            
            <Container>
                <h2 className="text-2xl font-semibold text-white tracking-wide">Private Chats</h2>

                {!privateChats &&
                    <div className="flex flex-col items-center justify-center h-[70vh]">
                        <img src={EmptyPrivateChats} alt="" />
                        <p className="text-white text-lg text-center w-2/3 mt-4">Your didn't start any private chat yet!</p>
                        {/* <p className="text-dark-secondary-300 text-center mt-4">Join your first group chat</p> */}
                    </div>                 
                }
                
            </Container>

            <Appbar />
        </div>        
    )
}

export default PrivateChats;