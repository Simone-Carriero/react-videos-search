
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer"}} onClick={() => onVideoSelect(video)} >
                <img style={{ width: "40%", objectFit: "cover", objectPosition: "center center" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                
                    <Typography variant="subtitle2" style={{maxWidth: "50%"}}>
                    <b>{video.snippet.title.length > 40 ? `${video.snippet.title.substring(0, 40)}...` : video.snippet.title}</b>
                    </Typography>
                    
    
            </Paper>
        </Grid>
    );
}

export default VideoItem;