import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "./Container";

// import graphic assets
import BackArrow from '../assets/icons/backArrow.svg';
import UserProfile from '../assets/icons/userProfile.svg';
import NotificationsEnabled from '../assets/icons/notificationsEnabled.svg';
import { useEffect } from "react";

const Nav = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [arrow, setArrow] = useState(false);
    useEffect(() => {
        if ( window.location.pathname != '/categories' && window.location.pathname != '/group-chats' && window.location.pathname != '/private-chats' ) {
            setArrow(true);
        }
    }, []);

    return ( 
        <nav>
            <div className={`flex items-center fixed w-full px-8 py-4 mx-0 z-10 ${params.doctor_id ? "" : "bg-dark-900"} ${arrow ? "justify-between" : "justify-end"}`}>
                {arrow &&
                    <div onClick={() => navigate(-1)}>
                        <img src={BackArrow} alt={'< BACK'} className="py-2 px-2 rounded-full bg-dark-800"/>
                    </div>
                }                
                <div className="flex items-center gap-2">
                    <img src={NotificationsEnabled} alt={'SMS'} className="py-2 px-2 rounded-full bg-dark-800"/>
                    <img src={UserProfile} alt={'PROFILE'} className="py-2 px-2 rounded-full bg-dark-800" onClick={() => navigate("/profile")}/>
                </div> 
            </div>
        </nav>
    )
}

export default Nav;