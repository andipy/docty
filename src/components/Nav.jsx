import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "./Container";

// import graphic assets
import BackArrow from '../assets/icons/backArrow.svg';
import UserProfile from '../assets/icons/userProfile.svg';
import NotificationsEnabled from '../assets/icons/notificationsEnabled.svg';

const Nav = () => {

    const params = useParams();

    const navigate = useNavigate(); 

    return ( 
        <nav>
            <div className={`flex items-center justify-between fixed w-full px-8 py-4 mx-0 z-10 ${params.doctor_id ? "" : "bg-white"}`}>
                <div onClick={() => navigate(-1)}>
                    <img src={BackArrow} alt={'< BACK'} className="py-2 px-2 rounded-full bg-teal-400"/>
                </div>
                <div className="flex items-center gap-2">
                    <img src={NotificationsEnabled} alt={'SMS'} className="py-2 px-2 rounded-full bg-teal-400"/>
                    <img src={UserProfile} alt={'PROFILE'} className="py-2 px-2 rounded-full bg-teal-400" onClick={() => navigate("/profile")}/>
                </div> 
            </div>
        </nav>
    )
}

export default Nav;