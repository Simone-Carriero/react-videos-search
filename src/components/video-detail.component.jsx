import {Paper, Typography} from '@material-ui/core'

const VideoDetail = ({ video: { id: { videoId }, snippet: { title, channelTitle, description } } }) => {

    
    //Funziona anche se messo qui
    if (!videoId) return <div>Search a video...</div>
   
    const videoSrc = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className='video-detail'>
            <div style={{height: "24rem"}}>
            
                <iframe 
                    src={videoSrc}
                    frameborder="0"
                    height="100%"
                    width="100%"
                    title="Video Player"
                    allowFullScreen
                />
            </div>


            <Paper elevation={6}>


            
                <div style={{padding: "1rem", display: "flex", flexDirection: "column", gap: ".5rem"}}>
                    <Typography variant='h6'>
                        <b>{title}</b>
                    </Typography>
                    <Typography variant='subtitle1'>
                        { channelTitle }
                    </Typography>
                    <Typography variant='subtitle2'>
                        {
                            `${description.substring(0, 50)}...`
                        }
                    </Typography>
                </div>
                </Paper>
          

        </div>
    )
}

export default VideoDetail