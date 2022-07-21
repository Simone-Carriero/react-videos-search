import React, {useState} from 'react';

import SearchBar from './components/search-bar.component';

import VideoDetail from './components/video-detail.component';

import VideoList from './components/video-list.component';

import { Grid } from '@material-ui/core'
import youtube from './api/youtube';




function App() {
  
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState({id: {}, snippet: {}})

  

  const handleSubmit = async (searchItem) => {
    const {data: {items: videos}} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 9,
        key: "AIzaSyAlQg7NeWOj9OKWDXrFdC2Fg_w4L7RQ0Jg",
        q: searchItem,
      }
    })
    setVideos(videos)
    setSelectedVideo({ id: {}, snippet: {} })
  }




  return (
    
      
        <Grid container spacing={4}>
         <Grid item xs={12}>
          <SearchBar onSubmit={handleSubmit} />
         </Grid>
        <Grid item md={8} xs={12}>
          <VideoDetail video={selectedVideo} /> 
         </Grid>

        <Grid item md={selectedVideo.id.videoId ? 4 : 12} xs={12}>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} /> 
        </Grid>
         
        </Grid>
      
  );

}

export default App;
