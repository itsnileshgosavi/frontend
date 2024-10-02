import { Link } from "react-router-dom";

const SuggestedVideo = ({ tittle, channel, views, uploaded, thumbnailUrl, videoId }) => {
  return (
    <div className="flex mb-4">
      <div className="w-40 h-24 bg-muted rounded-md mr-2">
        <Link to={`/watch/${videoId}`}>
          <img src={thumbnailUrl} alt={tittle} className="w-full h-full object-cover" />
        </Link>
      </div>
      <div>
        <Link to={`/watch/${videoId}`}>
          <h4 className="font-semibold">{tittle}</h4>
        </Link>
        <p className="text-sm text-muted-foreground">{channel}</p>
        <p className="text-sm text-muted-foreground">{views} views • {uploaded}</p>
      </div>
    </div>
  );
};

export default SuggestedVideo;
