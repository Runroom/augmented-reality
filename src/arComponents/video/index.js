import React from "react";

import { Button } from './styles';

class Video extends React.Component {
  state = {
    playing: true,
    visible: false
  };

  componentDidMount() {
    const AFRAME = window.AFRAME;
    const video = this.videoElement;

    AFRAME.registerComponent('vidhandler', {
      tick: () => {
        const visible = document.querySelector('a-marker').object3D.visible;
        const { playing } = this.state;

        if (playing) {
          if (visible) video.play();
          else video.pause();
        }

        this.setState({ visible });
      }
    });
  }

  togglePlay = () => {
    if (this.state.playing) {
      this.videoElement.pause();
      this.setState({ playing: false });
    } else {
      this.videoElement.play();
      this.setState({ playing: true });
    }
  }

  render() {
    const { playing, visible } = this.state;

    return (
      <>
        {visible && (
          <Button onClick={this.togglePlay}>
            {playing ? 'Pause' : 'Play'}
          </Button>
        )}
        <a-scene>
          <a-assets>
            <video
              ref={ref => this.videoElement = ref}
              id="myvideo"
              crossOrigin="true"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            ></video>
          </a-assets>
          <a-marker preset="hiro">
            <a-video
              src="#myvideo"
              width="16"
              height="9"
              position="0 0 0"
              scale="0.2 0.2 0.2"
              vidHandler
            ></a-video>
          </a-marker>
        </a-scene>
      </>
    );
  }
}

export default Video;
