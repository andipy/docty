import React, { useEffect, useState, useContext } from "react";
import { DataContext } from '../context/Data';
import { useParams } from "react-router-dom";

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';

const Categories = () => {

    const [categories, setCategories] = useContext(DataContext);

    const params = useParams();    

    const [doctors, setDoctors] = useState([]);
    const getDoctors = () => {
        categories.map((category) => {
            if ( category.category == params.category ) {
                setDoctors(category.doctors);
            }
        })
    }

    useEffect(() => {
        getDoctors();
    },[])

    return (
        <div>
            <Nav />
            <div className="px-10 mx-0 pt-20">
                <h2 className="text-3xl font-bold">{params.category}</h2>
                <div className="pb-12">
                    {doctors.map((doctor) => {
                        return (
                            <SimpleCard
                                item={doctor.name}
                                image={doctor.image}
                                key={doctor.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Categories;