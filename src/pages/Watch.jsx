import React, { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, Share2, Save, MoreHorizontal, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SuggestedVideo from '@/components/SuggestedVideo';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '@/components/Loading';
import { useSelector } from 'react-redux';
import CommentList from '@/components/CommentList';
import AddComment from '@/components/AddComment';


const VideoPage = () => {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const user = useSelector((state) => state.user.user);
  const isloggedin = useSelector((state) => state.user.isLoggedIn);
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
 //fetch video data
  const fetchVideoData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/api/video/${videoId}`);
      setVideoData(response.data.video);
    } catch (error) {
      console.error('Error fetching video data:', error);
    } finally {
      setLoading(false);
    }
  };

  //fetch suggested videos
  const fetchSuggestedVideos = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/videos`);
      if (response.data.success) {
        setSuggestedVideos(response.data.videos);
      }
    } catch (error) {
      console.error('Error fetching suggested videos:', error);
    }
  };

  useEffect(() => {
    fetchVideoData();
    fetchSuggestedVideos();
  }, [videoId]);

  //whenever this function is called, it will trigger a re-fetch of the comments
  function refreshComments(){
    setFetchTrigger(prev => !prev);
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-background text-foreground">
      <div className="max-w-[1280px] mx-auto px-4 py-6 lg:py-8 lg:flex lg:space-x-6">
        {/* Video Player and Info */}
        <div className="lg:w-2/3">
          {/* Video Player (placeholder) */}
          <div className="aspect-video bg-black mb-4">
            <img src={videoData.thumbnailUrl} alt={videoData.title} className="w-full h-full object-cover" />
          </div>

          {/* Video Title */}
          <h1 className="text-xl font-bold mb-2">{videoData.title}</h1>

          {/* Video Stats and Actions */}
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="text-muted-foreground text-sm">
              {videoData.views.toLocaleString()} views • {new Date().toLocaleDateString()}
            </div>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <Button variant="outline" size="sm" onClick={() => {setIsLiked(prev => !prev); setIsDisliked(false);}} className={`${isLiked ? 'text-blue-500 hover:text-blue-500' : ''}`}>
                <ThumbsUp className={`mr-2 h-4 w-4 ${isLiked ? 'text-blue-500' : ''}`} /> {isLiked ? videoData.likes + 1 : videoData.likes}
              </Button>
              <Button variant="outline" size="sm" onClick={() => {setIsDisliked(prev => !prev); setIsLiked(false);}} className={`${isDisliked ? 'text-blue-500 hover:text-blue-500' : ''}`}>
                <ThumbsDown className={`mr-2 h-4 w-4 ${isDisliked ? 'text-blue-500' : ''}`} /> {isDisliked ? videoData.dislikes + 1 : videoData.dislikes}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" /> Save
              </Button>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Channel Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage src={``} />
                <AvatarFallback>{videoData?.channelId?.charAt(0).toUpperCase() || 'G'}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{videoData.channelId}</h3>
                <p className="text-sm text-muted-foreground">1M subscribers</p>
              </div>
            </div>
            {isSubscribed ? <Button onClick={() => setIsSubscribed(false)} variant="outline" className="bg-gray-800 text-white">Subscribed</Button> : <Button onClick={() => setIsSubscribed(true)}>Subscribe</Button>}
          </div>

          {/* Video Description */}
          <div className="bg-secondary p-4 rounded-lg mb-6">
            <p>{videoData.description}</p>
          </div>
         
          {/* Comments Section */}
          <div>
            <h3 className="font-semibold mb-4">{commentCount} Comments</h3>
            
            {/* New Comment Form */}
            {isloggedin && (
               <AddComment refresh={refreshComments}/>
            )}
            
            {/* Existing Comments */}
            <CommentList refresh={refreshComments} setCommentCount={setCommentCount} />
          </div>
        </div>

        {/* Suggested Videos */}
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <h2 className="font-semibold mb-4">Suggested Videos</h2>
          
          {suggestedVideos.map((i) => (
            <SuggestedVideo key={i._id} videoId={i._id} tittle={i.title} channel={i.channelId} views={i.views} uploaded={new Date().toLocaleDateString()} thumbnailUrl={i.thumbnailUrl}/>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;