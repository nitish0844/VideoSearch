import axios from "axios";

const KEY = "AIzaSyDAwJiSFLDFNM4cT9117RxHgztiCIs2gnE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
