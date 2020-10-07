import React, { useContext } from "react";

import "./VideoItem.css";

function VideoItem({ video, onVideoSelect}){

    return(
        <div className="VideoItem" onClick={() => onVideoSelect(video)} >
            {/* <img   
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div>
                <div>
                    {video.snippet.title}
                </div>
            </div> */}
            <div className="card bg-secondary text-light">
                <div className="row no-gutters">
                    <div className="col-6">
                        <img src={video.snippet.thumbnails.medium.url} className="img-fluid" alt={video.snippet.title} />
                    </div>
                    <div className="col-6">
                        <div className="card-block px-2">
                            <h5 className="card-title my-4">{video.snippet.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;