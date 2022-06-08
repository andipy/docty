import React, { useState } from "react";

// import components
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';

const Categories = () => {

    const [categories, setCategories] = useState([
        {
            id: 1,
            category: 'Heart',
        },{
            id: 2,
            category: 'Kidney',
        },{
            id: 3,
            category: 'Brain',
        },{
            id: 4,
            category: 'Stomach',
        }
    ]);
    return (
        <div>
            <Nav />
            <div className="px-10 mx-0 pt-20">
                <h2 className="text-3xl font-bold">Categories</h2>
                <div className="pb-12">
                    {categories.map((category) => {
                        return (
                            <SimpleCard
                                category={category.category}
                                key={category.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Categories;