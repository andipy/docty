import React, { useEffect, useState, useContext } from "react";
import { DataContext } from '../context/Data';
import { useParams, Link } from "react-router-dom";

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';

const Category = () => {

    const [data, setData] = useContext(DataContext);

    const params = useParams();

    const [doctors, setDoctors] = useState([]);
    const getDoctors = () => {
        data.map((data) => {
            if ( data.category == params.category ) {
                setDoctors(data.doctors);
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
                            <Link
                                to={`/${params.category}/${doctor.id}`}
                                key={doctor.id}
                            >
                                <SimpleCard
                                    item={doctor.name}
                                    image={doctor.image}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Category;