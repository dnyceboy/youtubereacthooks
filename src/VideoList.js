import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, onVideoSelect }){
    const listRender = videos.map(video => (
        <VideoItem 
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
        />
    ));
    return (
        <div>
            {listRender}
        </div>
    )
}

export default VideoList;