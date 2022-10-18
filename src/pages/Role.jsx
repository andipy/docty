import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../components/Container";

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
            navigate("/signup", { state: role });
        } else {
            isMounted.current = true;
        }
    },[role]);
    

    return (
        <Container>
            <h1 className="text-3xl font-bold mb-6">I am a</h1>
            <div className="flex flex-col">
                <button
                    onClick={setPatient}
                    className="py-10 w-full bg-gray-100 rounded-md mb-4 font-semibold text-lg"
                >
                    Patient
                </button>
                <button
                    onClick={setDoctor}
                    className="py-10 w-full bg-gray-100 rounded-md mb-4 font-semibold text-lg"
                >
                    Doctor
                </button>
            </div>
        </Container>
    )
}

export default Role;