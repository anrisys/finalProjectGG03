import React from "react";

const VideoPlayer = ({ videoID }) => {
  return (
    <>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoID}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default VideoPlayer;
