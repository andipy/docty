import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { collection, doc, getDocs, onSnapshot, query, orderBy, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../services/firebase';
import { signOut } from "firebase/auth";

// import components
import Button from "../components/Button";
import Nav from '../components/Nav';
import SimpleCard from '../components/SimpleCard';
import PrivateRoute from './PrivateRoute';
import Message from "../components/Message";
import Arrow from "../assets/icons/go-arrow.svg"

const Categories = () => {

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const [data, setData] = useState([]);

    const [allPosts, setAllPosts] = useState([]);

    const getPosts = async () => {
        const collectionRef = collection(db, "posts");
        const q = query(collectionRef, orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setAllPosts(querySnapshot.docs.map((doc) => {
                return (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                )
            }));
        })
        return unsubscribe;
    }

    const deletePost = async (id) => {
        const docRef = doc(db, "posts", id);
        await deleteDoc(docRef);
    }

    // function to retrieve data from firestore database
    async function getData(){
        const querySnapshot = await getDocs(collection(db, "health_categories"));        
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const piece = doc.data();
            setData((prev) => [...prev, {health_category: piece.health_category, slug: piece.slug}]);
        });        
    }    
    useEffect(()=>{
        getData();
        getPosts();
    },[]);

    const handleSignOut = (e) => {
        e.preventDefault();  
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            setCurrentUser(null);
            navigate('/login');
        }).catch((error) => {
            // An error happened.
            console.log('An error happened');
        });
    };

    // object with the data about the logout button
    const buttonLogout = {
        label: 'Logout',
        style: 'w-full border-solid border-2 border-teal-900 text-teal-900 mt-3 py-3 rounded-lg font-semibold',
        disabled: false
    }
    

    return (
        <div>
            <Nav />
            
            <div className="px-10 mx-0 pt-20">
                {/* <h2 className="text-3xl font-bold">Categories</h2>
                <div className="pb-12">
                    {data.map((elem) => {
                        return (
                            <Link
                                to={`/${elem.slug}`}
                                key={elem.slug}
                            >
                                <SimpleCard
                                    item={elem.health_category}
                                />
                            </Link>
                        )
                    })}
                </div>                 */}
                {currentUser.uid == "t5UpVeRfGiRzf8vJqJhLohleeGC2" && 
                    <div>
                        <h4 className="text-xl font-bold mt-2">Create a post</h4>
                        <button
                            onClick={()=>navigate('/post')}
                            className="w-full py-3 px-6 bg-violet-800 rounded-md text-white"
                        >
                            + Create new post
                        </button>
                    </div>
                }

                <div>
                    {allPosts.map((post)=> {
                        return (
                            <Message                                
                                key={post.id}
                                content={post.content}
                                avatar={post.avatar}
                                username={post.displayName}
                                email={post.email}
                                time={(() => {
                                    var date = new Date(post.timestamp * 1000);
                                    var hours = date.getHours();
                                    var minutes = date.getMinutes();
                                    var formattedTime = hours + ':' + minutes;
                                    return formattedTime;
                                })()}
                            >
                                {currentUser.uid == "t5UpVeRfGiRzf8vJqJhLohleeGC2" && 
                                    <div className="flex items-center gap-6 mt-2">
                                        <button
                                            className="flex items-center text-red-200"
                                            onClick={() => deletePost(post.id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="flex items-center text-blue-200"
                                            onClick={()=>{navigate("/post", {state: post})}}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                }

                                <div
                                    onClick={()=>navigate(`/${post.id}`, {state: {...post}})}
                                    className="flex items-center justify-between w-full border-2 border-sky-900 w-full rounded-full mt-4"
                                >
                                    <button>
                                        {post.comments?.length ? post.comments?.length : '0'} comments
                                    </button>
                                    <img src={Arrow} alt="GO ->" />
                                </div>                                
                            </Message>
                        )
                    })}
                </div>

                <div className="mt-8 mb-8">
                    <div>You are {currentUser.email}</div>
                    <Button
                        button={buttonLogout}
                        onClickFunction={handleSignOut}
                    />
                </div>
            </div>           
        </div>
    )
}

export default Categories;