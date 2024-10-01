import React, { useEffect } from "react";
import { Users, Video, Bell, ThumbsUp } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import banner from "../assets/img/banner.jpg";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "@/components/Loading";
import CreateChannelDialog from "@/components/CreateChannel";
import { useDispatch } from "react-redux";


const OwnChannelPage = () => {
  const  {user}  = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 useEffect(() => {
  const fetchChannel = async () => {
    
    try {
      const response = await axios.get(`http://localhost:8000/api/channel`, {withCredentials: true});
      setChannel(response.data.channel);
      console.log(response.data.channel);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  fetchChannel();
  }, [user, dispatch]);

  if (loading) return <Loading />;
 
  return (
    <div className="bg-background text-foreground mt-16 ml-0 lg:ml-10">
      {/* Channel Banner */}
      <div className={`w-[95%] h-40 md:h-56 lg:h-64 relative rounded-xl`}>
        <img
          src={banner}
          alt={`${channel?.channelName} banner`}
          className="w-full h-full object-cover rounded-xl mx-10"
        />
      </div>

      {/* Channel Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background">
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${channel?.channelName}`}
              alt={channel?.channelName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">{channel?.channelName}</h1>
            <p className="text-muted-foreground">@{channel?.channelId}</p>
            <p className="mt-2">
              <span className="font-semibold">
                {channel?.subscribers.toLocaleString()}
              </span>{" "}
              subscribers •{" "}
              <span className="font-semibold">{channel?.videos.length}</span> videos
            </p>
            <button className="flex items-center space-x-2 mt-3 bg-button-bg text-button-foreground px-4 py-2 rounded-full hover:bg-button-hover transition-colors">
              
              <span>Customize channel</span>
            </button>
          </div>
          <div className="flex-grow"></div>
          
        </div>
      </div>

      {/* Channel Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Tabs defaultValue="home">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Latest Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {channel?.videos.map((videoId) => (
                <div
                  key={videoId}
                  className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md"
                >
                  <div className="aspect-video bg-muted"></div>
                  <div className="p-4">
                    <h3 className="font-semibold">Video Title</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      1.2K views • 2 days ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {channel?.videos.map((videoId) => (
                <div
                  key={videoId}
                  className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md"
                >
                  <div className="aspect-video bg-muted"></div>
                  <div className="p-4">
                    <h3 className="font-semibold">Video Title</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      1.2K views • 2 days ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="playlists">{/* Playlists content */}</TabsContent>
          <TabsContent value="community">{/* Community content */}</TabsContent>
          <TabsContent value="about">
            <div className="mt-6 max-w-3xl">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p>{channel?.description ? channel?.description : "No description"}</p>
              <div className="mt-6 flex items-center space-x-4">
                <Users size={20} className="text-muted-foreground" />
                <span>{channel?.subscribers.toLocaleString()} subscribers</span>
              </div>
              <div className="mt-2 flex items-center space-x-4">
                <Video size={20} className="text-muted-foreground" />
                <span>{channel?.videos.length} videos</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OwnChannelPage;
