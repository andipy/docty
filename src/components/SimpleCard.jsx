import React from "react";

const SimpleCard = ({ item, image }) => {
    return (
        <div className="flex-col p-4 bg-slate-100 rounded-lg mt-4">
            <div className="rounded-md overflow-clip">
                <img src={require(`../assets/images/${image}`)} alt="" className="object-cover h-36 w-full" />
            </div>
            <h4 className="text-xl font-semibold mt-1">{item}</h4>
        </div>
    )
}

export default SimpleCard;