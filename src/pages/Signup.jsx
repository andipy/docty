import React, { useState, useEffect } from "react";

// import components
import Input from '../components/Input';
import Button from "../components/Button";

const Signup = () => {

    function validate(elem, regex) {
        var re = new RegExp(regex);
        return re.test(elem);
    }

    const [valuesValidity, setValuesValidity] = useState({
        email: false,
        create_password: false,
        confirm_password: false
    });

    const [values, setValues] = useState({
        email: '',
        create_password: '',
        confirm_password: ''
    })

    const handleInput = (e) => {
        setValues({...values, [e.target.name]: e.target.value});

        for ( var i = 0; i < inputs.length; i++ ) {       

            if (e.target == document.activeElement && e.target.name == 'email') {
                if ( validate(values.email, inputs[i].pattern) ) {
                    setValuesValidity({...valuesValidity, [e.target.name]: true});
                } else {
                    setValuesValidity({...valuesValidity, [e.target.name]: false});
                };
                console.log('sono attivo email');
                break;
                
            }

            if (e.target.name == 'create_password') {
                if ( validate(values.create_password, inputs[i].pattern) ) {
                    setValuesValidity({...valuesValidity, [e.target.name]: true});
                } else {
                    setValuesValidity({...valuesValidity, [e.target.name]: false});
                };
                console.log('sono attivo crea');
                break;
            }
                    
            if (e.target.name == 'confirm_password') {
                if ( inputs[i].pattern ) {
                    setValuesValidity({...valuesValidity, [e.target.name]: true});
                } else {
                    setValuesValidity({...valuesValidity, [e.target.name]: false});
                };
                console.log('sono attivo conferma');
                break;
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

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

    ///////////////////////////
    const [button, setButton] = useState({});    
    useEffect(() => {
        if ( !valuesValidity.email || !valuesValidity.create_password || !valuesValidity.confirm_password ) {
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
    },[values])

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