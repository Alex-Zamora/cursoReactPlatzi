import React, { Component } from "react";
import VideoPlayerLayout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import FormattedTime from '../utilities/timer-utilities';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: "0 : 00",
    durationFloat: 0,
    currentTimeFloat: 0,
    loading: false,
    mute: true,
    lastValue: null,
  };
  togglePlay = event => {
    this.setState({
      pause: !this.state.pause
    });
  };
  componentDidMount() {
    this.setState({
      pause: !this.props.autoplay
    });
  }
  videoElement = event => {
    this.video = event.target;
    this.setState({
      duration: FormattedTime(this.video.duration),
      durationFloat: this.video.duration
    });
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTime: FormattedTime(this.video.currentTime),
      currentTimeFloat: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  }
  handleVolumeClick = event => {
    // const lastValue = this.video.volume;
    // this.setState({lastValue});
    this.setState({
      lastValue: this.video.volume,
      mute: !this.state.mute
    });
    this.state.mute ? this.video.volume = 0 : this.video.volume = this.state.lastValue;
    // if (this.state.mute) {
    //   this.video.volume = 0;
    // } else {
    //   this.video.volume = this.state.lastValue;
    // }
  }
  handleFullScreenClick = event => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullScreen()
    } else {
      
    }
  }
  setRef = element => {
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title title="Esto es un video chido!" />
        <Controls>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar 
            duration={this.state.durationFloat}
            value={this.state.currentTimeFloat}
            handleProgressChange={this.handleProgressChange}
          /> 
          <Volume
            handleVolumeClick={this.handleVolumeClick}
            handleVolumeChange={this.handleVolumeChange}
            mute={this.state.mute}
          />
          <FullScreen handleFullScreenClick={this.handleFullScreenClick}/>
        </Controls>
        <Spinner 
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.videoElement}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
