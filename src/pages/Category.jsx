import React, { useEffect, useState, useContext } from "react";
// import { DataContext } from '../context/Data';
import { useParams, useNavigate, useLocation } from "react-router-dom";

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';
import Container from "../components/Container";

const Category = () => {

    const params = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        console.log(state);
    },[])

    return (
        <div>        
            <Nav />
            <Container>
                <h2 className="text-3xl font-bold">{params.category}</h2>
                <div className="pb-12">
                    {doctors.map((doctor) => {
                        return (
                            <SimpleCard
                                item={doctor.name}
                                image={doctor.image.name}
                                onClickFunction={() => navigate(`/${params.category}/${doctor.id}`)}
                            />
                        )
                    })}
                </div>            
            </Container>
        </div>
    )
}

export default Category;