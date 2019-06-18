import React from 'react'
import {connect} from 'react-redux'

const URL_YOUTUBE = 'https://www.youtube.com/embed/'

const VideoPlayer = props => {
    return(
        <div className="video-player">
            <div>
                
                    {
                        // JSON.stringify(props)
                        !props.video.id && (
                            <p>sem video</p>
                        )
                    }
                    {
                        props.video.id && (
                            <div>
                                <iframe id="ytplayer" title={props.video.id.videoId} type="text/html" width="640" height="360"  src={URL_YOUTUBE+props.video.id.videoId+'?autoplay=1'}  frameborder="0"/>                            
                            <p>
                                {JSON.stringify(URL_YOUTUBE+props.video.id.videoId+'?autoplay=1')}
                            </p>
                            </div>
                        )
                    }
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        video: state.reproduz.video
    }
}
export default connect(mapStateToProps, null)(VideoPlayer);
