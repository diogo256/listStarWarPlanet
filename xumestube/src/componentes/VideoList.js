import React, { Component } from "react";
import { connect } from 'react-redux'
import { reproduzVideo } from '../store/action/reproduz-video'
import './VideoList.css'

// const VideoList = props => {
class VideoList extends Component{

    renderVideo(video){
        return (
            
            <li key={video.etag} onClick={() => this.props.reproduz(video)}>
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description} />
                <p className="title">{video.snippet.title}</p>
            </li>
            
        )
    }

    render(){
        return(
            <div className="video-list">
                {
                    this.props.carregando && (<div className="load">
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>)
                }
                
                <ul>
                    {
                        this.props.videos.map(video => {
                            console.log("Meu video", video)

                            return this.renderVideo(video)
                        })
                    } 
                </ul>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reproduz: (video) => dispatch(reproduzVideo(video))
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.busca.videos,
        carregando: state.busca.carregando,
        erro: state.busca.erro
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)