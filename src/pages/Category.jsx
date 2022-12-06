import React, { useEffect, useState, useContext } from "react";
// import { DataContext } from '../context/Data';
import { useNavigate, useLocation } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
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
        const collectionRef = collection(db, "users");
        const q = query(collectionRef, where("health_category", "==", state.health_category))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id)
            setDoctors((prev) => [...prev, {...doc.data(), doc_id: doc.id}]);
        });
        
    }

    useEffect(() => {
        console.log(state, "state");
        getDoctors();
    },[])

    return (
        <div>        
            <Nav />
            <Container>
                <h2 className="text-2xl font-semibold text-white tracking-wide">{state.health_category}</h2>
                <div className="pb-12">
                    {doctors?.map((doctor) => {
                        return (
                            <SimpleCard
                                key={doctor.uid}
                                first_name={doctor.first_name}
                                last_name={doctor.last_name}
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