import React, { useState, useContext } from "react";
import { DataContext } from '../context/Data';
import { Link } from 'react-router-dom';

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';

const Categories = () => {

    const [categories, setCategories] = useContext(DataContext);

    return (
        <div>
            <Nav />
            <div className="px-10 mx-0 pt-20">
                <h2 className="text-3xl font-bold">Categories</h2>
                <div className="pb-12">
                    {categories.map((category) => {
                        return (
                            <Link
                                to={`/${category.category}`}
                                key={category.id}
                            >
                                <SimpleCard
                                    item={category.category}                                    
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