import axios from "axios";

const KEY = "AIzaSyA-OgLtu9vMpmxkLSvhB20E47TthzzPhms";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 6,
        key: `${KEY}`,
    }
});