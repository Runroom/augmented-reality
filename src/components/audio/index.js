import React from "react";

import { Button } from './styles';

class Audio extends React.Component {
  state = {
    playing: true,
    visible: false
  };

  componentDidMount() {
    const AFRAME = window.AFRAME;
    const audio = this.audioElement;
    const { playing } = this.state;

    AFRAME.registerComponent('vidhandler', {
      tick: () => {
        const visible = document.querySelector('a-marker').object3D.visible;

        if (playing) {
          if (visible) audio.play();
          else audio.pause();
        }

        this.setState({ visible });
      }
    });
  }

  togglePlay = () => {
    if (this.state.playing) {
      this.audioElement.pause();
      this.setState({ playing: false });
    } else {
      this.audioElement.play();
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
            <audio
              ref={ref => this.audioElement = ref}
              id="myaudio"
              crossOrigin="true"
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            ></audio>
          </a-assets>
          <a-marker preset="hiro">
            <a-sound
              src="#myaudio"
              width="16"
              height="9"
              position="0 0 0"
              scale="0.2 0.2 0.2"
              vidHandler
            ></a-sound>
          </a-marker>
        </a-scene>
      </>
    );
  }
}

export default Audio;
