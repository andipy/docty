import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

import { auth } from '../services/firebase';

import Nav from "../components/Nav";
import Container from "../components/Container";
import Button from "../components/Button";
import { collection, doc, getDocs, query, serverTimestamp, updateDoc, where, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect } from "react";

const UpdateHealthCategory = () => {

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);
    
    const [user, setUser] = useState({});
    const getUser = async () => {
        const q = query(collection(db, "users"), where("uid", "==", currentUser.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            })
        });
        return unsubscribe;                
    }
    useEffect(()=>{
        getUser();
    },[])

    const [healthCategories, setHealthCategories] = useState([]);
    const getHealthCategories = async () => {
        const collectionRef = collection(db, "health_categories");
        const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setHealthCategories((prev) => [...prev, doc.data().health_category]);
            })
        })
        return unsubscribe;
    }
    useEffect(() => {
        getHealthCategories();
    },[]);

    const [yourCategory, setYourCategory] = useState(null);
    const selectedCategory = (e) => {
        setYourCategory(e.target.options[e.target.options.selectedIndex].value);
    }

    const updateHealthCategory = async (e) => {
        e.preventDefault();
        if ( yourCategory ) {
            const collectionRef = collection(db, "users");
            const q = query(collectionRef, where("uid", "==", currentUser.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (el) => {
                const docRef = doc(db, "users", el.id);
                await updateDoc(docRef, {
                    health_category: yourCategory,
                    updated_at: serverTimestamp()
                }).then(() => {navigate("/profile")})
            })            
        }
    }

    const buttonConfirm = {
        label: 'Confirm',
        style: 'w-full bg-teal-900 text-white mt-3 py-3 rounded-lg font-regular',
        disabled: false
    }

    return (
        <>
        <Nav />
        <Container>
            <div className="mt-8 mb-8">
                {user.role == "DOCTOR" &&
                    <form onSubmit={updateHealthCategory}>
                        <label htmlFor="health-categories">Your main health category</label>
                        <select className="bg-teal-50 w-full py-3 px-4 rounded-lg font-regular" id="health_category" name="health-categories" onChange={selectedCategory} required>
                            <option disabled selected> Select your category</option>
                            {healthCategories.map((category) => {
                                return (
                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                )
                            })}
                        </select>
                        <Button button={buttonConfirm} />
                    </form>
                }
            </div>
        </Container>
        </>
    )
}

export default UpdateHealthCategory;