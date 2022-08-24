import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading.....</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div style={{ backgroundColor: "#431e63" }} className="ui segment">
        <h4 style={{ color: "#fff" }} className="ui header">
          {video.snippet.title}
        </h4>
        <p style={{ color: "#fff" }}>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
