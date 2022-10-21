import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import Container from "../components/Container";
import Nav from "../components/Nav";
import { useContext } from "react";

const Doctor = () => {

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const { state } = useLocation();

    const [isSubscribed, setIsSubscribed] = useState(false);
    useEffect(() => {
        state.followers.map((follower) => {
            if ( follower == currentUser.uid ) {
                setIsSubscribed(true);
            } else {
                setIsSubscribed(false);
            }
        })
    }, []);

    console.log(state, "state");

    return (
        <div>
            <Nav />
            <Container>
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-teal-300 shrink-0"></div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">{state.first_name}</h2>
                        <div className="flex gap-1 mt-1 flex-wrap">
                            {state.specialties.map((specialty) => {
                                return (
                                    <div
                                        className="text-xs py-1 px-2 rounded-full bg-teal-100"
                                        key={specialty}
                                    >
                                        {specialty}
                                    </div>
                                )
                            })}
                        </div>
                        <p>{state.followers.length} subscribers</p>
                    </div>
                </div>
                <button className={isSubscribed ? "mt-4 w-full rounded-md p-3 font-semibold bg-gray-200 text-gray-400" : "mt-4 w-full rounded-md p-3 font-semibold bg-teal-400"}>{isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
            </Container>
        </div>
    )
}

export default Doctor;