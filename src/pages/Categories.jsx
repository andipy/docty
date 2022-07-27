import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
// import { DataContext } from '../context/Data';

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';

const Categories = () => {

    // const [data, setData] = useContext(DataContext);

    const [data, setData] = useState([]);
    const getData = async (name) => {
        const api = await fetch(`https://docty-backend.herokuapp.com/doctors`);
        const data = await api.json();
        setData(data);
    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <div>
            <Nav />
            
            <div className="px-10 mx-0 pt-20">
                <h2 className="text-3xl font-bold">Categories</h2>
                <div className="pb-12">
                    {data.map((item) => {
                        return (
                            <Link
                                to={`/${item.specality}`}
                                key={item.id}
                            >
                                <SimpleCard
                                    item={item.name}
                                    image={item.image.name}
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