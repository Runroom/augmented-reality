import React from "react";

import { Button } from './styles';

const src = './audios/audio-sample.mp3';

class Sound extends React.Component {
  state = {
    playing: true,
    visible: false
  };

  componentDidMount() {
    const AFRAME = window.AFRAME;
    const audio = this.audioElement;

    AFRAME.registerComponent('audiohandler', {
      tick: () => {
        const visible = document.querySelector('a-marker').object3D.visible;
        const { playing } = this.state;

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

  render () {
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
              id="mysound"
              crossOrigin="true"
              src={src}
            ></audio>
          </a-assets>
          <a-marker preset="hiro">
            <a-sound
              src="#mysound"
              audiohandler
            ></a-sound>
          </a-marker>
        </a-scene>
      </>
    );
  }
}

export default Sound;
