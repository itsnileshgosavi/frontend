import React from 'react';
import { ThumbsUp, ThumbsDown, Share2, Save, MoreHorizontal, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SuggestedVideo from '@/components/SuggestedVideo';

const VideoPage = ({ videoData }) => {
  const {
    videoId,
    title,
    thumbnailUrl,
    description,
    channelId,
    uploader,
    views,
    likes,
    dislikes,
    uploadDate,
    comments
  } = videoData;

  return (
    <div className="bg-background text-foreground">
      <div className="max-w-[1280px] mx-auto px-4 py-6 lg:py-8 lg:flex lg:space-x-6">
        {/* Video Player and Info */}
        <div className="lg:w-2/3">
          {/* Video Player (placeholder) */}
          <div className="aspect-video bg-black mb-4">
            <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Video Title */}
          <h1 className="text-xl font-bold mb-2">{title}</h1>

          {/* Video Stats and Actions */}
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="text-muted-foreground text-sm">
              {views.toLocaleString()} views • {new Date(uploadDate).toLocaleDateString()}
            </div>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <Button variant="outline" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" /> {likes.toLocaleString()}
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsDown className="mr-2 h-4 w-4" /> {dislikes.toLocaleString()}
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
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${uploader}`} />
                <AvatarFallback>{uploader[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{uploader}</h3>
                <p className="text-sm text-muted-foreground">1M subscribers</p>
              </div>
            </div>
            <Button>Subscribe</Button>
          </div>

          {/* Video Description */}
          <div className="bg-secondary p-4 rounded-lg mb-6">
            <p>{description}</p>
          </div>

          {/* Comments Section */}
          <div>
            <h3 className="font-semibold mb-4">{comments.length} Comments</h3>
            {comments.map((comment) => (
              <div key={comment.commentId} className="flex space-x-4 mb-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.userId}`} />
                  <AvatarFallback>{comment.userId[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{comment.userId} <span className="font-normal text-muted-foreground">{new Date(comment.timestamp).toLocaleDateString()}</span></p>
                  <p>{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Videos */}
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <h2 className="font-semibold mb-4">Suggested Videos</h2>
          {/* Placeholder for suggested videos */}
          {suggestedVideoDummyArray.map((i) => (
            <SuggestedVideo key={i} tittle={i.tittle} channel={i.channel} views={i.views} uploaded={i.uploaded} />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;

var suggestedVideoDummyArray =[

  {
    tittle: "Suggested Video 1",
    channel: "Channel 1",
    views: "1M",
    uploaded: "2 days ago",
  },
  {
    tittle: "Suggested Video 2",
    channel: "Channel 2",
    views: "2M",
    uploaded: "3 days ago",
  },
  {
    tittle: "Suggested Video 3",
    channel: "Channel 3",
    views: "3M",
    uploaded: "4 days ago",
  },
  {
    tittle: "Suggested Video 4",
    channel: "Channel 4",
    views: "4M",
    uploaded: "5 days ago",
  },
  {
    tittle: "Suggested Video 5",
    channel: "Channel 5",
    views: "5M",
    uploaded: "6 days ago",
  },
]