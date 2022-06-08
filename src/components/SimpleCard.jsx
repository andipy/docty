import React from "react";

import PlaceholderImg from '../assets/images/doctor.png';

const SimpleCard = ({ category }) => {
    return (
        <div className="flex-col p-4 bg-slate-100 rounded-lg mt-4">
            <div className="rounded-md overflow-clip">
                <img src={PlaceholderImg} alt="" className="object-cover h-36 w-full" />
            </div>
            <h4 className="text-xl font-semibold mt-1">{category}</h4>
        </div>
    )
}

export default SimpleCard;