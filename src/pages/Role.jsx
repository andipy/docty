import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../components/Container";
import Button from "../components/Button";

const Role = () => {

    const navigate = useNavigate();

    const [role, setRole] = useState();
    const setPatient = () => {
        setRole("PATIENT");
    }
    const setDoctor = () => {
        setRole("DOCTOR");
    }

    const isMounted = useRef(false);
    useEffect(()=>{
        if ( isMounted.current ) {
            if ( role == "PATIENT" ) {
                navigate("/signup", { state: role });
            }
            if ( role == "DOCTOR" ) {
                navigate("/signup-doctor", { state: role });
            }
            
        } else {
            isMounted.current = true;
        }
    },[role]);

    // object with the data about the go-to-login button
    const buttonGoToLogin = {
        label: 'Go to login',
        style: 'w-full border-solid border-2 border-teal-400 text-teal-400 mt-3 py-3 rounded-lg font-semibold',
        disabled: false
    }    

    return (
        <Container>
            <h1 className="text-3xl font-bold mb-6 text-white">Signup as a:</h1>
            <div className="flex flex-col">
                <button
                    onClick={setPatient}
                    className="py-10 w-full bg-dark-secondary-800 rounded-md mb-4 font-semibold text-lg text-white"
                >
                    Patient
                </button>
                <button
                    onClick={setDoctor}
                    className="py-10 w-full bg-dark-secondary-800 rounded-md mb-4 font-semibold text-lg text-white"
                >
                    Doctor
                </button>
            </div>

            <div className="mt-16">
                <h4 className="text-xl font-bold text-white">Already have an account?</h4>
                <Button
                    button={buttonGoToLogin}
                    onClickFunction={()=>{navigate("/login")}}
                />
            </div>
        </Container>
    )
}

export default Role;