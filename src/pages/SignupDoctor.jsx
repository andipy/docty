import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { AuthContext } from '../context/AuthContext';
// import components
import Input from '../components/Input';
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Container from "../components/Container";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const SignupDoctor = () => {

    const { state } = useLocation();

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    // state to store information about the validity of the inputs
    const [valuesValidity, setValuesValidity] = useState({
        email: false,
        first_name: false,
        last_name: false,
        create_password: false,
        confirm_password: false,
        checkbox: false
    });

    // state to store the data input by the user in the registration inputs
    const [values, setValues] = useState({
        email: '',
        first_name: '',
        last_name: '',
        create_password: '',
        confirm_password: '',
        checkbox: ''
    })

    // function that grabs the data input by the user in the inputs and stores it into the related state; and updates the information about the validity of the data input by the user in the inputs based on the patterrn required by each input
    const handleInput = (e) => {
        setValues({...values, [e.target.name]: e.target.value});

        if (e.target.name == 'email') {
            var re = new RegExp(inputs[0].pattern);
            if ( re.test(e.target.value) ) {
                setValuesValidity({...valuesValidity, [e.target.name]: true});
            } else {
                setValuesValidity({...valuesValidity, [e.target.name]: false});
            };
        }

        if (e.target.name == 'first_name') {
            var re = new RegExp(inputs[1].pattern);
            if ( re.test(e.target.value) ) {
                setValuesValidity({...valuesValidity, [e.target.name]: true});
            } else {
                setValuesValidity({...valuesValidity, [e.target.name]: false});
            };
        }

        if (e.target.name == 'last_name') {
            var re = new RegExp(inputs[2].pattern);
            if ( re.test(e.target.value) ) {
                setValuesValidity({...valuesValidity, [e.target.name]: true});
            } else {
                setValuesValidity({...valuesValidity, [e.target.name]: false});
            };
        }     

        if (e.target.name == 'create_password') {
            var re = new RegExp(inputs[3].pattern);
            if ( re.test(e.target.value) ) {
                setValuesValidity({...valuesValidity, [e.target.name]: true});
            } else {
                setValuesValidity({...valuesValidity, [e.target.name]: false});
            };
        }
                
        if (e.target.name == 'confirm_password') {
            if ( e.target.value == values.create_password ) {
                setValuesValidity({...valuesValidity, [e.target.name]: true});
            } else {
                setValuesValidity({...valuesValidity, [e.target.name]: false});
            };
        }
    }    

    // function that updates the information about the validity of the checkbox input, based on the fact that is checked or unchecked
    const handleCheck = (e) => {
        console.log(e.target.name);
        if (e.target.name == 'checkbox') {
            setValuesValidity({...valuesValidity, [e.target.name]: e.target.checked});
        }
    }

    // state and useEffect to handle button status (style, and "enabled vs diasabled"), based on the validity of the inputs and checkbox
    const [buttonSignup, setButtonSignup] = useState({});    
    useEffect(() => {
        if ( valuesValidity.email == true && valuesValidity.first_name == true && valuesValidity.last_name == true && valuesValidity.create_password == true && valuesValidity.confirm_password == true && valuesValidity.checkbox == true ) {
            setButtonSignup({
                label: 'Create account',
                style: 'w-full bg-teal-900 text-white mt-3 py-3 rounded-lg font-regular',
                disabled: false                
            });
        } else {
            setButtonSignup({
                label: 'Create account',
                style: 'w-full bg-gray-300 text-gray-400 mt-3 py-3 rounded-lg font-regular',
                disabled: true                
            });
        }
    },[valuesValidity])

    // function register a new user with firebase email and pwd provider, and redirect to
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, values.email, values.create_password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const collectionRef = collection(db, "users");
            addDoc(collectionRef, {
                avatar: user.photoURL,
                cover_image: null,
                created_at: serverTimestamp(),
                deactivated_at: null,
                email: user.email,
                first_name: values.first_name,
                last_name: values.last_name,
                role: state,
                updated_at: null,
                uid: user.uid,
                username: user.displayName
            });
            navigate('/profile');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        
    }

    // array with the data about the inputs needed in the registration form
    const inputs = [
        {
            id: 1,
            label: 'Your email',
            type: 'email',
            name: 'email',
            placeholder: 'Type your email here',
            required: true,
            pattern: '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$'
        },{
            id: 2,
            label: 'Your first name',
            type: 'text',
            name: 'first_name',
            placeholder: 'Type your first name here',
            required: true,
            pattern: '^.{3,}$'
        },{
            id: 3,
            label: 'Your last name',
            type: 'text',
            name: 'last_name',
            placeholder: 'Type your last name here',
            required: true,
            pattern: '^.{3,}$'
        },{
            id: 4,
            label: 'Create a password',
            type: 'password',
            name: 'create_password',
            placeholder: 'Type a new password',
            required: true,
            pattern:'^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
        },{
            id: 5,
            label: 'Confirm your password',
            type: 'password',
            name: 'confirm_password',
            placeholder: 'Type your password again',
            required: true,
            pattern: values.password
        }
    ]

    // object with the data about the checkbox
    const checkbox = {
        id: 1,
        type: 'checkbox',
        name: 'checkbox',
        required: true
    }

    // object with the data about the go-to-login button
    const buttonGoToLogin = {
        label: 'Go to login',
        style: 'w-full border-solid border-2 border-teal-900 text-teal-900 mt-3 py-3 rounded-lg font-semibold',
        disabled: false
    }

    useEffect(()=>{
        if ( currentUser ) {
            navigate('/categories');
        }
    },[currentUser]);

    console.log(state);

    return (
        <Container>
            <h1 className="font-semibold mb-2">Hello,</h1>
            <p className="font-bold text-xl mb-8">Create your account {"as a " + state?.toLowerCase()} with email and password!</p>
            <form className="mb-8" action="" onSubmit={handleSubmit}>
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
                <Checkbox
                    type={checkbox.type}
                    name={checkbox.name}
                    handleCheck={handleCheck}
                />
                <Button button={buttonSignup} />            
            </form>
            <h4 className="text-xl font-bold">Already have an account?</h4>
            <Button
                button={buttonGoToLogin}
                onClickFunction={()=>{navigate("/login")}}
            />
        </Container>
    )
}

export default SignupDoctor;