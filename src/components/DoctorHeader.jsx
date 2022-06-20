import React, { useState } from "react";
import { useEffect } from "react";

import Button from './Button';

const DoctorHeader = ({ doctorName, imageCover, doctorSubscribers, doctorTags }) => {

    const [subscription, setSubscription] = useState(false);
    const handleSubscription = () => {
        setSubscription((prev) => !prev);        
    }

    const [button, setButton] = useState({});
    useEffect(() => {
        if ( subscription == false ) {
            setButton({
                label: 'Subscribe',
                style: 'w-full bg-teal-900 text-white'
            });
        } else {
            setButton({
                label: 'Unsubscribe',
                style: 'w-full bg-gray-300 text-gray-400'
            });
        }
    },[subscription])

    return (
        <div className="flex flex-col z-0">
            <div className="h-32 w-full bg-teal-100 overflow-hidden">
                {/* <img src={require(`../assets/images/${imageCover}`)} alt=""/> */}
            </div>

            <div className="px-10 mx-0">
                <div className="flex flex-row items-center mt-2">
                    <div className="h-16 w-16 object-cover rounded-full mr-2 bg-teal-200">
                        {/* <img className="h-16 w-16 object-cover rounded-full mr-2" src={require(`../assets/images/${imageCover}`)} alt=""/> */}
                    </div>                
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold">{doctorName}</h1>
                        <div>
                            {doctorTags.map((tag) => {
                                return (
                                    <span className="text-sm font-semibold" key={tag}>{tag + ", "}</span>
                                )
                            })}
                        </div>
                        <span className="text-sm font-semibold">{doctorSubscribers + " subscribers"}</span>
                    </div>                
                </div>

                <Button buttonLabel={'click'} onClickFunction={handleSubscription} button={button} />
            </div>
        </div>        
    )
}

export default DoctorHeader;