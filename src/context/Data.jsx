import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [data, setData] = useState([
        {
            id: 1,
            category: 'Heart',
            image: 'heart-cover.webp',
            doctors: [
                {
                    id: 1,
                    name: 'Bobby Solo',
                    image: 'bobby-solo.jpg',
                    tags: ['Heart', 'Cardiovascular'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'How to prevent heart disease',
                            description: 'The things to avoid in your lifestyle to prevent heart diseases, both for young and old people',
                            views: 17823,
                            thumbnail: 'bobby-solo.jpg'
                        },{
                            id: 2,
                            title: 'Eat well',
                            description: 'What food benefit your heart and cardiovascular system, and what does not',
                            views: 54893,
                            thumbnail: 'bobby-solo.jpg'
                        },{
                            id: 3,
                            title: 'Running and heart health',
                            description: 'Making some cardio activity is good for your heart and cardiovascular system in general',
                            views: 4723,
                            thumbnail: 'bobby-solo.jpg'
                        },{
                            id: 4,
                            title: 'Video title',
                            description: 'Lorem ipsum description yeah',
                            views: 198273,
                            thumbnail: 'bobby-solo.jpg'
                        }
                    ]
                },{
                    id: 2,
                    name: 'Magic jonson',
                    image: 'magic-jonson.jpg',
                    tags: ['Heart'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'You heart is delicate',
                            description: 'Lorem ipsum eat well and live long',
                            views: 3416,
                            thumbnail: 'magic-jonson.jpg'
                        },{
                            id: 2,
                            title: 'Did you know that sex benefits your heart?',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 86711,
                            thumbnail: 'magic-jonson.jpg'
                        },{
                            id: 3,
                            title: 'How lifestyle affects your cardiovascular system',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 9051,
                            thumbnail: 'magic-jonson.jpg'
                        },{
                            id: 4,
                            title: 'Video title',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 17823,
                            thumbnail: 'magic-jonson.jpg'
                        }
                    ]
                },{
                    id: 3,
                    name: 'Freak Doc',
                    image: 'freak-doc.jpg',
                    tags: ['Heart', 'Cardiovascular'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Video title 1',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 13,
                            thumbnail: 'freak-doc.jpg'
                        },{
                            id: 2,
                            title: 'Video title 2',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 56789,
                            thumbnail: 'freak-doc.jpg'
                        },{
                            id: 3,
                            title: 'Video title 3',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 2234,
                            thumbnail: 'freak-doc.jpg'
                        },{
                            id: 4,
                            title: 'Video title 4',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 1111,
                            thumbnail: 'freak-doc.jpg'
                        }
                    ]
                },{
                    id: 4,
                    name: 'Mister Mime',
                    image: 'mister-mime.jpg',
                    tags: ['Heart', 'Cardiovascular', 'Specialist'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Mister mime video 1',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 46281,
                            thumbnail: 'mister-mime.jpg'
                        },{
                            id: 2,
                            title: 'Mister mime video 2',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 377,
                            thumbnail: 'mister-mime.jpg'
                        },{
                            id: 3,
                            title: 'Mister mime video 3',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 2537,
                            thumbnail: 'mister-mime.jpg'
                        },{
                            id: 4,
                            title: 'Mister mime video 4',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 72628,
                            thumbnail: 'mister-mime.jpg'
                        }
                    ]
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
                    image: 'kidney-man.jpg',
                    tags: ['Kidney'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'How to prevent kidney disease',
                            description: 'The things to avoid in your lifestyle to prevent kidney diseases, both for young and old people',
                            views: 17823,
                            thumbnail: 'kidney-man.jpg'
                        },{
                            id: 2,
                            title: 'Eat well',
                            description: 'What food benefit your kidney, and what does not',
                            views: 54893,
                            thumbnail: 'kidney-man.jpg'
                        },{
                            id: 3,
                            title: 'Running and heart health',
                            description: 'Making some cardio activity is good for your kidney',
                            views: 4723,
                            thumbnail: 'kidney-man.jpg'
                        }
                    ]
                },{
                    id: 2,
                    name: 'Best Kidney Doc Ever',
                    image: 'best-kidney-doc-ever.jpg',
                    tags: ['Kidney', 'Enterostuff'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Wanna know how to cure your kidney?',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 17823,
                            thumbnail: 'best-kidney-doc-ever.jpg'
                        },{
                            id: 2,
                            title: 'Eat well = good kidney',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 54893,
                            thumbnail: 'best-kidney-doc-ever.jpg'
                        },{
                            id: 3,
                            title: 'Video kidney 3',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsums',
                            views: 4723,
                            thumbnail: 'best-kidney-doc-ever.jpg'
                        }
                    ]
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
                    image: 'brian.png',
                    tags: ['Brain'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Brain 1',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 17823,
                            thumbnail: 'brian.png'
                        },{
                            id: 2,
                            title: 'Brain 2',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 54893,
                            thumbnail: 'brian.png'
                        },{
                            id: 3,
                            title: 'Brain 3',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsums',
                            views: 4723,
                            thumbnail: 'brian.png'
                        }
                    ]
                },{
                    id: 2,
                    name: 'Peter Griffin',
                    image: 'peter.png',
                    tags: ['Brain', 'Smart Guy'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Peter Super 1',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 17823,
                            thumbnail: 'peter.png'
                        },{
                            id: 2,
                            title: 'Peter Super 2',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 54893,
                            thumbnail: 'peter.png'
                        },{
                            id: 3,
                            title: 'Peter Super 3',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsums',
                            views: 4723,
                            thumbnail: 'peter.png'
                        }
                    ]
                },{
                    id: 3,
                    name: 'Stewie',
                    image: 'stewie.png',
                    tags: ['Brain', 'Inventor', 'Crazy'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Stewie 1',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 17823,
                            thumbnail: 'stewie.png'
                        },{
                            id: 2,
                            title: 'Stewie 2',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 54893,
                            thumbnail: 'stewie.png'
                        },{
                            id: 3,
                            title: 'Stewie 3',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsums',
                            views: 4723,
                            thumbnail: 'stewie.png'
                        }
                    ]
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
                    image: 'stromae.jpg',
                    tags: ['Stomach'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Stomach doctor 1',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 17823,
                            thumbnail: 'stromae.jpg'
                        },{
                            id: 2,
                            title: 'Stomach doctor 1',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 54893,
                            thumbnail: 'stromae.jpg'
                        },{
                            id: 3,
                            title: 'Stomach doctor 1',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsums',
                            views: 4723,
                            thumbnail: 'stromae.jpg'
                        }
                    ]
                },{
                    id: 2,
                    name: 'Meg Stomach',
                    image: 'meg.png',
                    tags: ['Stomach'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Stomach doctor 2',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 17823,
                            thumbnail: 'meg.png'
                        },{
                            id: 2,
                            title: 'Stomach doctor 2',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 54893,
                            thumbnail: 'meg.png'
                        },{
                            id: 3,
                            title: 'Stomach doctor 2',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsums',
                            views: 4723,
                            thumbnail: 'meg.png'
                        }
                    ]
                },{
                    id: 3,
                    name: 'Karkaroff',
                    image: 'karkaroff.webp',
                    tags: ['Stomach'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Stomach doctor 3',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 17823,
                            thumbnail: 'karkaroff.webp'
                        },{
                            id: 2,
                            title: 'Stomach doctor 3',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 54893,
                            thumbnail: 'karkaroff.webp'
                        },{
                            id: 3,
                            title: 'Stomach doctor 3',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsums',
                            views: 4723,
                            thumbnail: 'karkaroff.webp'
                        }
                    ]
                },{
                    id: 4,
                    name: 'Ye You Know Stomach',
                    image: 'ye-you.jpg',
                    tags: ['Stomach'],
                    subscribed: false,
                    subscribers: 123,
                    videos: [
                        {
                            id: 1,
                            title: 'Stomach doctor 4',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 17823,
                            thumbnail: 'ye-you.jpg'
                        },{
                            id: 2,
                            title: 'Stomach doctor 4',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
                            views: 54893,
                            thumbnail: 'ye-you.jpg'
                        },{
                            id: 3,
                            title: 'Stomach doctor 4',
                            description: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsums',
                            views: 4723,
                            thumbnail: 'ye-you.jpg'
                        }
                    ]
                }
            ]
        }
    ]);

    return (
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    );
}