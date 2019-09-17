import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from "./components";

import youtube from "./api/youtube";
// require("dotenv").config();
// // require("custom-env").env();

// class App extends Component {
//   state = {
//     videos: [],
//     selectedVideo: null
//   };

//   componentDidMount() {
//     this.handleSubmit("pdf generation with react and node");
//   }

//   onVideoSelect = video => {
//     this.setState({ selectedVideo: video });
//   };

//   handleSubmit = async searchTerm => {
//     const response = await youtube.get("search", {
//       params: {
//         //make sure we return video
//         part: "snippet",
//         //how many videos to return
//         maxResults: 5,
//         key: "AIzaSyDw4qF_x_SoeN-6wFdvhXtlLQsLdiiJJbs",
//         q: searchTerm
//       }
//     });
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0]
//     });
//   };
//   render() {
//     const { selectedVideo, videos } = this.state;

//     return (
//       <Grid justify="center" container spacing={10}>
//         <Grid item xs={12}>
//           <Grid container spacing={10}>
//             <Grid item xs={12}>
//               <SearchBar onFormSubmit={this.handleSubmit} />
//             </Grid>
//             <Grid item xs={8}>
//               <VideoDetail video={selectedVideo} />
//             </Grid>
//             <Grid item xs={4}>
//               <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     );
//   }
// }

import { REACT_APP_API_KEY } from "./config";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos }
    } = await youtube.get("search", {
      params: {
        //make sure we return video
        part: "snippet",
        //how many videos to return
        maxResults: 5,
        key: REACT_APP_API_KEY,
        // key: "AIzaSyDw4qF_x_SoeN-6wFdvhXtlLQsLdiiJJbs",
        q: searchTerm
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
};
export default App;
