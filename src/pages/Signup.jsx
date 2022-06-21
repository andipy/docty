import React, { useState, useEffect } from "react";

// import components
import Input from '../components/Input';
import Button from "../components/Button";

const Signup = () => {

    const [values, setValues] = useState({
        email: '',
        create_password: '',
        confirm_password: ''
    })
    const handleInput = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    console.log(values);

    const inputs = [
        {
            id: 1,
            label: 'Your email',
            type: 'email',
            name: 'email',
            placeholder: 'Type your email here',
            required: true,
        },{
            id: 2,
            label: 'Create a password',
            type: 'password',
            name: 'create_password',
            placeholder: 'Type a new password',
            required: true,
            pattern:'^[A-Za-z0-9]{8,16}$'
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

    const [validity, setValidity] = useState(false);
    useEffect(()=>{
        inputs.map((input) => {
            var inputPattern = new RegExp(input.pattern);
            if ( inputPattern.test(input) ) {
                setValidity(true);
                console.log(validity);
            } else {
                setValidity(false);
                console.log(validity);
            }
        })
    }, [setValues]);


    ///////////////////////////
    const [inputsValid, setInputsValid] = useState(false);
    const [button, setButton] = useState({});    
    useEffect(() => {
        if ( inputsValid == false ) {
            setButton({
                label: 'Create account',
                style: 'w-full bg-gray-300 text-gray-400 mt-3 py-3 rounded-lg font-regular',
                disabled: true
            });
        } else {
            setButton({
                label: 'Create account',
                style: 'w-full bg-teal-900 text-white mt-3 py-3 rounded-lg font-regular',
                disabled: false
            });
        }
    },[inputsValid])

    return (
        <div className="px-10 mx-0 pt-20">
            <form action="" onSubmit={handleSubmit}>
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
                <Button button={button} />
            </form>            
        </div>
    )
}

export default Signup;