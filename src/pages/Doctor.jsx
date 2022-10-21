import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { storage } from "../services/firebase";
import { ref, getDownloadURL } from "firebase/storage";

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

    const [image, setImage] = useState("");
    const getImage = () => {
        getDownloadURL(ref(storage, '/imgs/peter.png'))
        .then((url) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();

            setImage(url);
        })
        .catch((error) => {
            // Handle any errors
        });
        
    }
    useEffect(()=> {
        getImage()
    },[]);

    return (
        <div>
            <Nav />
            <Container>
                <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-teal-300 shrink-0 overflow-hidden">
                        <p className={image ? "hidden" : ""}>{image ? "" : state.first_name.split("")[0].toUpperCase()}</p>
                        <img src={image} alt="" className={!image ? "hidden" : "w-full h-full object-cover"} />
                    </div>
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
                <button className={`mt-4 w-full rounded-md p-3 font-semibold ${isSubscribed ? "bg-gray-200 text-gray-400" : "bg-teal-400"}`}>
                    {isSubscribed ? "Unsubscribe" : "Subscribe"}
                </button>
            </Container>
        </div>
    )
}

export default Doctor;