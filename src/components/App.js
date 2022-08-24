import React, { useState, useEffect } from "react";
import SearchBar from "./searchbar";
import VideoList from "./videoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/userVideos";
import myGif from "./Youtube.gif";

const App = () => {
  const [selectedVideo, setSelectedVideos] = useState(null);
  const [videos, search] = useVideos("how you like that");

  useEffect(() => {
    setSelectedVideos(videos[0]);
  }, [videos]);

  // setSelectedVideos(response.data.items[0]);

  return (
    <div className="background">
      <div className="ui container body">
        <img className="gif" src={myGif} alt="my-gif" />
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={setSelectedVideos} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
