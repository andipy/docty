import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { useLocation } from "react-router-dom";

import { db, auth } from '../services/firebase';

import Nav from "../components/Nav";
import Message from "../components/Message";
import { arrayUnion, Timestamp, updateDoc, doc, onSnapshot, getDoc, query, orderBy, QuerySnapshot } from "firebase/firestore";

const PostDetails = () => {

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const { state } = useLocation();
    const [comment, setComment] = useState("");
    const [allComments, setAllComments] = useState([]);

    const handleComment = async (e) => {
        if ( comment ) {
            e.preventDefault();
            const docRef = doc(db, "posts", state.id);
            await updateDoc(docRef, {
                comments: arrayUnion({
                    comment,
                    avatar: currentUser.photoURL,
                    username: currentUser.displayName,
                    time: Timestamp.now(),
                    email: currentUser.email
                })
            });
            setComment("");
        }
    }

    const getComments = async () => {
        const docRef = doc(db, "posts", state.id);
        const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
            setAllComments(querySnapshot.data().comments)
        });
        return unsubscribe;
    }

    useEffect(()=> {
        if ( state ) {
            getComments();
            console.log(allComments);
        }
    },[]);

    return (
        <div>
            <Nav />
            
            <div className="px-10 mx-0 pt-20">
                <Message {...state}></Message>

                <div>
                    {allComments?.map((comment)=> {
                        return (
                            <div key={comment.time} className="flex my-3" >
                                <h2 className="font-bold">
                                    {comment.username ? comment.username : comment.email}
                                </h2>
                                <p>{comment.comment}</p>                                
                            </div>
                        )
                    } )}
                </div>
            </div>

            <form onSubmit={handleComment} className="flex w-full fixed bottom-0 z-50">
                <input
                    type="text"
                    placeholder="Leave your comment bisello"
                    className="w-full bg-grey-200 py-3 px-3 border-solid border-2 border-sky-500 rounded-sm"
                    onChange={(e)=>setComment(e.target.value)}
                    value={comment}
                />
                <button
                    type="submit"
                    className="px-4 bg-cyan-600 rounded-sm text-white"
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default PostDetails;