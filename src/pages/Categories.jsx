import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';
import Container from "../components/Container";

const Categories = () => {

    const navigate = useNavigate();

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
            </Container>
        </div>        
    )
}

export default Categories;