import React from "react";
import { useNavigate } from "react-router-dom";

// import components
import NavIcon from './NavIcon';

// import graphic assets
import BackArrow from '../assets/icons/backArrow.svg';
import UserProfile from '../assets/icons/userProfile.svg';
import NotificationsEnabled from '../assets/icons/notificationsEnabled.svg';

const Nav = () => {

    const navigate = useNavigate();

    return (
        <nav className="px-10 mx-0 py-4 flex items-center justify-between fixed w-full bg-white">
            <div onClick={() => navigate(-1)}>
                <NavIcon src={BackArrow} alt={'< BACK'} />
            </div>
            <div className="flex items-center">
                <NavIcon src={NotificationsEnabled} alt={'SMS'} />
                <NavIcon src={UserProfile} alt={'PROFILE'} />
            </div>
        </nav>
    )
}

export default Nav;