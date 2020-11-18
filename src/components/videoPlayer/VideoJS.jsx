import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
 
class VideoJS extends Component {
    player = {}
    state = {
        video: {
            src: "https://ca351d1575ab.us-east-1.playback.live-video.net/api/video/v1/us-east-1.076005434014.channel.9YfCW2PffJ0z.m3u8",
        }
    }
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
 
    render() {
        return (
            <div className="player-wrapper">
                <header>
                    <h1>Video</h1>
                </header>
                <VideoPlayer
                    className="main-video-player"
                    controls={true}
                    hideControls={['playbackrates']}
                    src={this.state.video.src}
                    autoplay={true}
                    onReady={this.onPlayerReady.bind(this)}
                />
            </div>
        );
    }
}
export default VideoJS;