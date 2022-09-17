import React, { useEffect, useState, useContext } from "react";
import { DataContext } from '../context/Data';
import { useParams, Link } from "react-router-dom";

// import components
import Nav from '../components/Nav';
import VideoCard from '../components/VideoCard';
import DoctorHeader from "../components/DoctorHeader";

const Videos = () => {

    const [data, setData] = useContext(DataContext);

    const params = useParams();    
    
    const [videos, setVideos] = useState([]);
    const [doctorName, setDoctorName] = useState('');
    const [doctorTags, setDoctorTags] = useState([]);
    const [doctorImageCover, setDoctorImageCover] = useState('');
    const [doctorSubscribers, setDoctorSubscribers] = useState('');

    const getVideos = () => {
        data.map((data) => {
            if ( data.category == params.category ) {
                const doctors = data.doctors;
                doctors.map((doctor) => {
                    if ( doctor.id == params.id ) {
                        setVideos(doctor.videos);
                        setDoctorName(doctor.name);
                        setDoctorTags(doctor.tags);
                        setDoctorImageCover(doctor.image);
                        setDoctorSubscribers(doctor.subscribers)
                        setDoctorTags(doctor.tags);
                    }
                })
            }
        })
    }

    useEffect(() => {
        getVideos();
    },[])

    return (
        <div>
            <Nav />
            <DoctorHeader
                doctorName={doctorName}
                imageCover={doctorImageCover}
                doctorSubscribers={doctorSubscribers}
                doctorTags={doctorTags}
            />
            <div className="px-10 mx-0 pb-12 mt-4">            
                <h2 className="text-2xl font-bold">Videos</h2>
                {videos.map((video) => {
                    return (
                        <VideoCard
                            item={video.title}
                            image={video.thumbnail}
                            description={video.description}
                            views={video.views}
                            key={video.id}
                        />
                    )
                })}                
            </div>
        </div>
    )
}

export default Videos;