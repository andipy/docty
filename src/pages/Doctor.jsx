import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { storage } from "../services/firebase";
import { ref, getDownloadURL } from "firebase/storage";

import { db } from "../services/firebase";

import Container from "../components/Container";
import Nav from "../components/Nav";
import { useContext } from "react";
import { collection, getDocs, updateDoc, query, doc, where, serverTimestamp, onSnapshot } from "firebase/firestore";

const Doctor = () => {

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const { state } = useLocation();

    const [followers, setFollowers] = useState([]);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const checkFollowers = async() => {
        const q = query(collection(db, "users"), where("uid", "==", state.uid));
        const unsubscribe =  onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc.data().followers.map((follower) => {
                    if ( follower == currentUser.uid ) {
                        setIsSubscribed(true);
                    }
                })
                setFollowers(doc.data().followers)
            })
        });
        return unsubscribe;
    }
    useEffect(() => {
        checkFollowers();
    }, [followers]);

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
        getImage();
    },[]);

    const handleFollow = async () => {
        if ( !isSubscribed ) {
            const newArray = followers;
            newArray.push(currentUser.uid);
            const q = query(collection(db, "users"), where("uid", "==", state.uid));
            const docSnap = await getDocs(q);
            docSnap.forEach(async (el) => {
                const docRef = doc(db, "users", el.id);
                console.log(el.data(), "doccchy");
                await updateDoc(docRef, {
                    followers: newArray,
                    updated_at: serverTimestamp()
                })
            });
            setIsSubscribed(true);
        } else {
            const newArray = followers;
            const index = newArray.indexOf(currentUser.uid);
            if (index > -1) {
                newArray.splice(index, 1);
            }
            const q = query(collection(db, "users"), where("uid", "==", state.uid));
            const docSnap = await getDocs(q);
            docSnap.forEach(async (el) => {
                const docRef = doc(db, "users", el.id);
                console.log(el.data(), "doccchy");
                await updateDoc(docRef, {
                    followers: newArray,
                    updated_at: serverTimestamp()
                })
            });
            setIsSubscribed(false);
        }
    }

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
                        <h2 className="text-xl font-semibold text-white">{state.first_name}</h2>
                        <div className="flex gap-1 mt-1 flex-wrap">
                            {state.specialties?.map((specialty) => {
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
                        <p className="text-white">{followers.length} subscribers</p>
                    </div>
                </div>
                <button
                    className={`mt-4 w-full rounded-md p-3 font-regular ${isSubscribed ? "bg-dark-tertiary-800 text-dark-tertiary-700" : "bg-teal-400"}`}
                    onClick={handleFollow}
                >
                    {isSubscribed ? "Unsubscribe" : "Subscribe"}
                </button>
            </Container>
        </div>
    )
}

export default Doctor;