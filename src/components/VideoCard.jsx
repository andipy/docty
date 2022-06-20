import React from "react";

const VideoCard = ({ item, image, description, views }) => {
    return (
        <div className="flex-col p-4 bg-slate-100 rounded-lg mt-4">
            <div className="rounded-md overflow-clip">
                <img src={require(`../assets/images/${image}`)} alt="" className="object-cover h-36 w-full" />
            </div>

            <div className="flex flex-row mt-1">
                <div className="flex flex-col w-4/5">
                    <h4 className="text-xl font-semibold">{item}</h4>
                    <p className="text-sm font-semibold mt-1">{description}</p>
                </div>
                <div className="flex flex-col w-1/5 text-xs font-semibold items-end mt-2">
                    <span className="">{views}</span>
                    <span>views</span>
                </div>
            </div>            
        </div>
    )
}

export default VideoCard;