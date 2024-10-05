import React, { useEffect } from 'react';
import {VideoCard} from '@/components/VideoCard';
import axios from 'axios';
import { useState } from 'react';

const VideoCardList = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:8000/api/videos");
                setVideos(response.data.videos);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    return (
        <div className='flex flex-row flex-wrap mt-20 ml-2 mr-2 lg:ml-20 gap-2 justify-center'>
            {videos.map((video) => (
                <VideoCard key={video._id} id={video._id} title={video.title} channel={video.channel.name} thumbnail={video.thumbnailUrl} uploaded={video.createdAt.toString().slice(0, 10)} views={video.views} channelAvatar={video.channel.avatar} />
            ))}
        </div>
    );
}

export default VideoCardList;
