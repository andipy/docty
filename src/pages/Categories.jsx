import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../services/firebase';
import { signOut } from "firebase/auth";

// import components
import Button from "../components/Button";
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';
import Container from "../components/Container";

const Categories = () => {

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const [categories, setCategories] = useState([]);

    // function to retrieve data from firestore database
    async function getCategories(){
        const array = [];
        const querySnapshot = await getDocs(collection(db, "health_categories"));        
        querySnapshot.forEach((doc) => {
            array.push({
                ...doc.data(),
                category_id: doc.id
            })
        });
        setCategories(array);
    }    
    useEffect(()=>{
        getCategories();
    },[]);

    const handleSignOut = (e) => {
        e.preventDefault();  
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            setCurrentUser(null);
            navigate('/login');
        }).catch((error) => {
            // An error happened.
            console.log('An error happened');
        });
    };

    // object with the data about the logout button
    const buttonLogout = {
        label: 'Logout',
        style: 'w-full border-solid border-2 border-teal-900 text-teal-900 mt-3 py-3 rounded-lg font-semibold',
        disabled: false
    }
    

    return (
        <div>
            <Nav />
            
            <Container>
                <h2 className="text-3xl font-bold">Categories</h2>
                <div className="pb-12">
                    {categories?.map((elem) => {
                        return (                            
                            <SimpleCard
                                key={elem.category_id}
                                item={elem.health_category}
                                onClickFunction={() => navigate(`/categories/${elem.category_id}`, { state: elem })}                                
                            />
                        )
                    })}
                </div>

                <div className="mt-8 mb-8">
                    <div>You are {currentUser.email}</div>
                    <Button
                        button={buttonLogout}
                        onClickFunction={handleSignOut}
                    />
                </div>
            </Container>
        </div>        
    )
}

export default Categories;