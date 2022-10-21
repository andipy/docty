import React, { useEffect, useState, useContext } from "react";
// import { DataContext } from '../context/Data';
import { useNavigate, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';
import Container from "../components/Container";

const Category = () => {

    const navigate = useNavigate();
    const { state } = useLocation();

    const [doctors, setDoctors] = useState([]);

    const getDoctors = async() => {
        let array = [];
        const subCollectionRef = collection(db, "health_categories", state.category_id, "doctors");
        const querySnapshot = await getDocs(subCollectionRef);
        querySnapshot.forEach((doc) => {
            array.push(doc.data());
            console.log(doc.data())
        });
        setDoctors(array);
    }

    useEffect(() => {
        console.log(state);
        getDoctors();
    },[])

    return (
        <div>        
            <Nav />
            <Container>
                <h2 className="text-3xl font-bold">{state.health_category}</h2>
                <div className="pb-12">
                    {doctors?.map((doctor) => {
                        return (
                            <SimpleCard
                                key={doctor.uid}
                                item={doctor.first_name}
                                image={doctor.avatar}
                                onClickFunction={() => navigate(`/categories/${state.category_id}/${doctor.uid}`, { state: doctor })}
                            />
                        )
                    })}
                </div>            
            </Container>
        </div>
    )
}

export default Category;