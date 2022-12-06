import React from "react";

const SimpleCard = ({ first_name, last_name, category, image, onClickFunction }) => {
    return (
        <div
            onClick={onClickFunction}
            className="flex-col p-4 bg-dark-secondary-800 rounded-lg mt-4"
        >
            <div className="rounded-md overflow-clip">
                <img src="" alt="" className="object-cover h-36 w-full" />
            </div>
            <h4 className="text-lg font-regular mt-1 text-white">{first_name} {last_name} {category}</h4>
        </div>
    )
}

export default SimpleCard;