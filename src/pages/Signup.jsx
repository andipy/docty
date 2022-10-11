import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { AuthContext } from '../context/AuthContext';
// import components
import Input from '../components/Input';
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";

const Signup = () => {

    let navigate = useNavigate();

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    // state to store information about the validity of the inputs
    const [valuesValidity, setValuesValidity] = useState({
        email: false,
        create_password: false,
        confirm_password: false,
        checkbox: false
    });

    // state to store the data input by the user in the registration inputs
    const [values, setValues] = useState({
        email: '',
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

        if (e.target.name == 'create_password') {
            var re = new RegExp(inputs[1].pattern);
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
        if ( valuesValidity.email == true && valuesValidity.create_password == true && valuesValidity.confirm_password == true && valuesValidity.checkbox == true ) {
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
            navigate('/categories');
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
            label: 'Create a password',
            type: 'password',
            name: 'create_password',
            placeholder: 'Type a new password',
            required: true,
            pattern:'^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
        },{
            id: 3,
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

    return (
        <div className="px-10 mx-0 pt-20 pb-10">
            <h1 className="text-3xl font-bold mb-2">Hello,</h1>
            <div>
                {currentUser ? JSON.stringify(currentUser.uid) : 'no'}
            </div>
            <p className="font-semibold mb-8">Create your account with email and password!</p>
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
        </div>
    )
}

export default Signup;