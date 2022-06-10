import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [categories, setCategories] = useState([
        {
            id: 1,
            category: 'Heart',
            doctors: [
                {
                    id: 1,
                    name: 'Bobby Solo',
                },{
                    id: 2,
                    name: 'Magic jonson',
                },{
                    id: 3,
                    name: 'Freak Doc',
                },{
                    id: 4,
                    name: 'Mister Mime',
                }
            ]
        },{
            id: 2,
            category: 'Kidney',
            doctors: [
                {
                    id: 1,
                    name: 'Kidney Man',
                },{
                    id: 2,
                    name: 'Best Kidney Doc Ever',
                }
            ]
        },{
            id: 3,
            category: 'Brain',
            doctors: [
                {
                    id: 1,
                    name: 'Brian Brain',
                },{
                    id: 2,
                    name: 'Peter Griffin',
                },{
                    id: 3,
                    name: 'Brain Stewie',
                }
            ]
        },{
            id: 4,
            category: 'Stomach',
            doctors: [
                {
                    id: 1,
                    name: 'Stomach Rea',
                },{
                    id: 2,
                    name: 'Meg Stomach',
                },{
                    id: 3,
                    name: 'Karkarof',
                },{
                    id: 4,
                    name: 'Ye You Know Stomach',
                }
            ]
        }
    ]);

    return (
        <DataContext.Provider value={[categories, setCategories]}>
            {props.children}
        </DataContext.Provider>
    );
}