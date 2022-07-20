import { Grid } from '@material-ui/core'
import VideoItem from './video-item.component'

const VideoList = ({ videos, onVideoSelect }) => {
    const mappedVideos = videos.map(video => (
        <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect= {onVideoSelect}
        />
    ))

    return (
        <Grid container spacing={4}>
            {mappedVideos}
        </Grid>
    )
}

export default VideoList