import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { collection, getDocs} from 'firebase/firestore';
import { db, auth } from '../services/firebase';
import { signOut } from "firebase/auth";

// import components
import Button from "../components/Button";
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';
import PrivateRoute from './PrivateRoute';

const Categories = () => {

    let navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const [data, setData] = useState([]);

    // function to retrieve data from firestore database
    async function getData(){
        const querySnapshot = await getDocs(collection(db, "health_categories"));        
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const piece = doc.data();           
            console.log(piece);
            setData((prev) => [...prev, {health_category: piece.health_category, slug: piece.slug}]);
        });        
    }    
    useEffect(()=>{
        getData();                
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
            
            <div className="px-10 mx-0 pt-20">
                <h2 className="text-3xl font-bold">Categories</h2>
                <div className="pb-12">
                    {data.map((elem) => {
                        return (
                            <Link
                                to={`/${elem.slug}`}
                                key={elem.slug}
                            >
                                <SimpleCard
                                    item={elem.health_category}
                                />
                            </Link>
                        )
                    })}
                </div>

                <h4 className="text-xl font-bold">Logout</h4>
                <div>You are {currentUser.email}</div>
                <Button
                    button={buttonLogout}
                    onClickFunction={handleSignOut}
                />
            </div>           
        </div>
    )
}

export default Categories;