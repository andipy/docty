import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { addDoc, updateDoc, doc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase';

import Nav from "../components/Nav";
import { useEffect } from "react";

const Post = () => {

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const { state } = useLocation();

    const [post, setPost] = useState({content: ""});
    const handleInput = (e) => {
        setPost({...post, content: e.target.value});
    }
    const submitPost = async (e) => {
        e.preventDefault();

        if (post?.hasOwnProperty("id")) {
            const docRef = doc(db, "posts", post.id);
            const updatedPost = {...post, timestamp: serverTimestamp()}
            await updateDoc(docRef, updatedPost);
            return navigate("/categories");
        } else if ( post.content ) {
            const collectionRef = collection(db, "posts");
            await addDoc(collectionRef, {
                ...post,
                timestamp: serverTimestamp(),
                user: currentUser.uid,
                avatar: currentUser.photoURL,
                username: currentUser.displayName,
                email: currentUser.email
            });
            setPost({...post, content: ""});
            return navigate("/categories");
        }
    }
    
    useEffect(()=>{
        if ( state?.id ) {
            setPost({content: state.content, id: state.id})
        }
    },[])

    return (
        <div>
            <Nav />
            <div className="px-10 mx-0 pt-20">
                <h4 className="text-xl font-bold mt-2">{post.id ? "Update your post" : "Create new post"}</h4>
                <form onSubmit={submitPost}>
                    <input
                        onChange={handleInput}
                        value={post.content}
                        type="text"
                        placeholder="Type here"
                        className="w-full bg-grey-200 py-3 px-3 mb-2 mt-2 border-solid border-2 border-sky-500 rounded-sm"                        
                    />
                    <button type="submit" className="w-full py-3 px-6 bg-cyan-600 rounded-sm text-white">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Post;