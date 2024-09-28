import React from 'react';
import {VideoCard} from '@/components/VideoCard';

const VideoCardList = () => {
    return (
        <div className='flex flex-row flex-wrap mt-20 ml-2 mr-2 lg:ml-20 gap-2 justify-center'>
            <VideoCard title="This is very long title for testing purpose also this is very long title for" channel="Rick Astley" thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" uploaded="10 years ago" views="10 lakh views" channelAvatar="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
            <VideoCard title="test" channel="test" thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" uploaded="test" views="test" channelAvatar="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
            <VideoCard title="test" channel="test" thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" uploaded="test" views="test" channelAvatar="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
            <VideoCard title="test" channel="test" thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" uploaded="test" views="test" channelAvatar="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
            <VideoCard title="test" channel="test" thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" uploaded="test" views="test" channelAvatar="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
            <VideoCard title="test" channel="test" thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" uploaded="test" views="test" channelAvatar="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
            <VideoCard title="test" channel="test" thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" uploaded="test" views="test" channelAvatar="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
            <VideoCard title="test" channel="test" thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" uploaded="test" views="test" channelAvatar="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
            <VideoCard title="test" channel="test" thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" uploaded="test" views="test" channelAvatar="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" />
        </div>
    );
}

export default VideoCardList;
