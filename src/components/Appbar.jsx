import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchInactive from "../assets/icons/search-inactive.svg";
import SearchActive from "../assets/icons/search-active.svg";
import GroupsInactive from "../assets/icons/groups-inactive.svg";
import GroupsActive from "../assets/icons/groups-active.svg";
import ChatsInactive from "../assets/icons/chats-inactive.svg";
import ChatsActive from "../assets/icons/chats-active.svg";

const Appbar = () => {

    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState('');
    useEffect(() => {
        if ( window.location.pathname == '/categories') {
            setCurrentTab('Search');
        }
        if ( window.location.pathname == '/group-chats') {
            setCurrentTab('Groups');
        }
        if ( window.location.pathname == '/private-chats') {
            setCurrentTab('Chats');
        }
    }, []);

    const tabs = [
        {
            tab: 'Search',
            icons: {
                active: SearchActive,
                inactive: SearchInactive
            },
            route: 'categories'
        },{
            tab: 'Groups',
            icons: {
                active: GroupsActive,
                inactive: GroupsInactive
            },
            route: 'group-chats'
        },{
            tab: 'Chats',
            icons: {
                active: ChatsActive,
                inactive: ChatsInactive
            },
            route: 'private-chats'
        }
    ]

    return (
        <nav className="w-full h-16 fixed bottom-0 rounded-t-xl bg-dark-900">
            <div className="flex flex-row px-8 h-[inherit] justify-between items-center">
                {tabs.map((tab) => {
                    return (
                        <div
                            className="flex flex-col justify-center items-center w-12 aspect-square rounded-full"
                            onClick={() => navigate(`/${tab.route}`)}
                        >
                            <img src={currentTab.toLowerCase() == tab.tab.toLowerCase() ? tab.icons.active : tab.icons.inactive} alt="" />
                            <span class={`text-sm font-light ${currentTab.toLowerCase() == tab.tab.toLowerCase() ? "text-white" : "text-dark-secondary-300"}`}>{tab.tab}</span>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

export default Appbar;