import React from "react";

function VideoDetails({ video }){   
    if(!video){
        return (
            <div>Please Search For Videos!</div>
        )
    }
    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title="video player" src={videoSource} allowFullScreen />
            </div>
            <div>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetails;