import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';

// import components
import Nav from '../components/Nav';
import Appbar from "../components/Appbar";
import Container from "../components/Container";

import EmptyGroupChats from "../assets/icons/groups-empty.svg"

const GroupChats = () => {

    const navigate = useNavigate();

    const [groupChats, setGroupChats] = useState(null);

    return (
        <div>
            <Nav />
            
            <Container>
                <h2 className="text-2xl font-semibold text-white tracking-wide">Group Chats</h2>

                {!groupChats &&
                    <div className="flex flex-col items-center justify-center h-[70vh]">
                        <img src={EmptyGroupChats} alt="" />
                        <p className="text-white text-lg text-center w-1/2 mt-4">Your are not in any group chat yet!</p>
                        {/* <p className="text-dark-secondary-300 text-center mt-4">Join your first group chat</p> */}
                    </div>                 
                }

                               
            </Container>

            <Appbar />
        </div>        
    )
}

export default GroupChats;