import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

import { auth } from '../services/firebase';
import { signOut } from "firebase/auth";

import Nav from "../components/Nav";
import Container from "../components/Container";
import Button from "../components/Button";
import Input from "../components/Input";
import { collection, doc, getDocs, query, serverTimestamp, updateDoc, where, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect } from "react";

const UpdateName = () => {

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);
    
    const [user, setUser] = useState({});
    const getUser = async () => {
        const q = query(collection(db, "users"), where("uid", "==", currentUser.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            })
        });
        return unsubscribe;                
    }
    useEffect(()=>{
        getUser();
    },[])

    const [values, setValues] = useState({
        first_name: null,
        last_name: null
    })
    const handleInput = (e) => {
        e.preventDefault();
        setValues({...values, [e.target.name]: e.target.value});
    }
    const updateName = async (e) => {
        e.preventDefault();
        if ( values.first_name && values.last_name ) {
            const collectionRef = collection(db, "users");
            const q = query(collectionRef, where("uid", "==", currentUser.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (el) => {
                const docRef = doc(db, "users", el.id);
                await updateDoc(docRef, {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    updated_at: serverTimestamp()
                }).then(() => {navigate("/profile")})
            })            
        }
    }

    const buttonConfirm = {
        label: 'Confirm',
        style: 'w-full bg-teal-400 text-dark-900 mt-2 py-3 rounded-lg font-regular',
        disabled: false
    }

    const inputs = [
        {
            id: 1,
            label: 'First name',
            type: 'text',
            name: 'first_name',
            placeholder: 'Type your first name here',
            required: true,
            pattern: '^.{3,}$',
            needed_for_patient: true
        },{
            id: 2,
            label: 'Last name',
            type: 'text',
            name: 'last_name',
            placeholder: 'Type your last name here',
            required: true,
            pattern:'^.{3,}$',
            needed_for_patient: true
        }
    ]

    return (
        <>
        <Nav />
        <Container>
            <div className="mt-8 mb-8">
                <form className="mb-20" onSubmit={updateName}>
                    {inputs.map((input) => {
                        return (                    
                            <Input
                                key={input.id}
                                placeholder={input.placeholder}
                                type={input.type}
                                label={input.label}
                                name={input.name}
                                value={values[input.name]}
                                onChange={handleInput}
                            />
                        )
                    })}
                    <Button button={buttonConfirm} />
                </form>
            </div>
        </Container>
        </>
    )
}

export default UpdateName;