import React from 'react';
import HorizontalScroll from '@/components/CategoryBar';
import VideoCardList from '@/components/VideoCardList';

const Landing = () => {
    return (
        <div className='h-screen'>
            <HorizontalScroll />
            <VideoCardList />
        </div>
    );
}

export default Landing;
