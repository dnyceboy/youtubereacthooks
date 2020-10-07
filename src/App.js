import React, { useState, useEffect, createContext } from 'react';
import SearchBar from "./SearchBar";
import youtube from "./youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);


  useEffect(() => {
    onTermSubmit("ru piano nier main theme");
  }, []);

  async function onTermSubmit(term){
    const response = await youtube.get("/search", {
      params: {
          q: term
      }
    })
    setVideos(response.data.items)
    setSelectedVideos(response.data.items[0])
  } 

  function onVideoSelect(video){
    setSelectedVideos(video);
  }

  function changeTheme(){
      setDarkTheme(!darkTheme)
  }

  return (
    <div className={`App container-fluid mt-2 ${darkTheme ? "dark-theme" : "light-theme"}` }>

      <nav className={`navbar navbar-expand-lg ${darkTheme ? "navbar-dark" : "navbar-light" }  ${darkTheme ? "bg-dark" : "bg-light" }`}>
          <a className="navbar-brand" href="#">
            <img className="App-img mx-auto" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Youtube-512.png" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              
            </ul>
            
            <div className="custom-control custom-switch">
              <input onClick={changeTheme} type="checkbox" className="custom-control-input" id="customSwitch1"/>
              <label className="custom-control-label" htmlFor="customSwitch1">Dark Theme</label>
            </div>
          </div>
      </nav>

      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="row">
        <div className="col-7">
          <VideoDetails video={selectedVideos} />
        </div>
        <div className="col-5">
          <VideoList onVideoSelect={onVideoSelect} videos={videos} darkTheme={darkTheme} />
        </div>
      </div>
    </div>
  );
}

export default App;
