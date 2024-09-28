

const SuggestedVideo = ({ tittle, channel, views, uploaded }) => {
  return (
    <div className="flex mb-4">
      <div className="w-40 h-24 bg-muted rounded-md mr-2"></div>
      <div>
        <h4 className="font-semibold">{tittle}</h4>
        <p className="text-sm text-muted-foreground">{channel}</p>
        <p className="text-sm text-muted-foreground">{views} • {uploaded}</p>
      </div>
    </div>
  );
};

export default SuggestedVideo;
