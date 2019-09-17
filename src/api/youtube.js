import axios from "axios";

//axios.create ,makes it easier to use GET requests later, also you get to specify baseURL and params
export default axios.create({
  baseURL:
    "https://www.googleapis.com/youtube/v3"
});
