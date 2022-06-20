import React, { useState, useContext } from "react";
import { DataContext } from '../context/Data';
import { Link } from 'react-router-dom';

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';

const Categories = () => {

    const [data, setData] = useContext(DataContext);

    return (
        <div>
            <Nav />
            <div className="px-10 mx-0 pt-20">
                <h2 className="text-3xl font-bold">Categories</h2>
                <div className="pb-12">
                    {data.map((data) => {
                        return (
                            <Link
                                to={`/${data.category}`}
                                key={data.id}
                            >
                                <SimpleCard
                                    item={data.category}
                                    image={data.image}
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