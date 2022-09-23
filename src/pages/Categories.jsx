import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
// import { DataContext } from '../context/Data';

import { collection, getDocs} from 'firebase/firestore';
import { db } from '../services/firebase';

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';

const Categories = () => {

    // const [data, setData] = useContext(DataContext);

    const [data, setData] = useState([]);
    /*
    WORKING LOGIC BEFORE USING FIREBASE
    const getData = async (name) => {
        const api = await fetch(`https://docty-backend.herokuapp.com/doctors`);
        const data = await api.json();
        setData(data);
    }
    useEffect(() => {
        getData();
    },[]);
    */

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
    },[])
    

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
            </div>

        </div>
    )
}

export default Categories;