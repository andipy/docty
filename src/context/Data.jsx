import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [categories, setCategories] = useState([
        {
            id: 1,
            category: 'Heart',
            image: 'heart-cover.webp',
            doctors: [
                {
                    id: 1,
                    name: 'Bobby Solo',
                    image: 'bobby-solo.jpg'
                },{
                    id: 2,
                    name: 'Magic jonson',
                    image: 'magic-jonson.jpg'
                },{
                    id: 3,
                    name: 'Freak Doc',
                    image: 'freak-doc.jpg'
                },{
                    id: 4,
                    name: 'Mister Mime',
                    image: 'mister-mime.jpg'
                }
            ]
        },{
            id: 2,
            category: 'Kidney',
            image: 'kidney-cover.jpg',
            doctors: [
                {
                    id: 1,
                    name: 'Kidney Man',
                    image: 'kidney-man.jpg'
                },{
                    id: 2,
                    name: 'Best Kidney Doc Ever',
                    image: 'best-kidney-doc-ever.jpg'
                }
            ]
        },{
            id: 3,
            category: 'Brain',
            image: 'brain-cover.webp',
            doctors: [
                {
                    id: 1,
                    name: 'Brian Brain',
                    image: 'brian.png'
                },{
                    id: 2,
                    name: 'Peter Griffin',
                    image: 'peter.png'
                },{
                    id: 3,
                    name: 'Stewie',
                    image: 'stewie.png'
                }
            ]
        },{
            id: 4,
            category: 'Stomach',
            image: 'stomach-cover.jpg',
            doctors: [
                {
                    id: 1,
                    name: 'Stomach Rea',
                    image: 'stromae.jpg'
                },{
                    id: 2,
                    name: 'Meg Stomach',
                    image: 'meg.png'
                },{
                    id: 3,
                    name: 'Karkaroff',
                    image: 'karkaroff.webp'
                },{
                    id: 4,
                    name: 'Ye You Know Stomach',
                    image: 'ye-you.jpg'
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