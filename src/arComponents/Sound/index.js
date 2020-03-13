import React from "react";

import { Button } from './styles';

const src = './audios/audio-sample.mp3';

class Sound extends React.Component {
  state = {
    playing: false,
    visible: false
  };

  componentDidMount() {
    const AFRAME = window.AFRAME;
    const audio = this.audioElement;
    const { playing } = this.state;

    AFRAME.registerComponent('audiohandler', {
      tick: () => {
        audio.play();

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
          <a-marker preset="hiro">
            <a-box position="0 0.5 0" material="color: yellow; opacity: 0.5;"></a-box>
            <a-sound
              ref={ref => this.audioElement = ref}
              src={`src: url(${src})`}
              crossOrigin="true"
              autoPlay="true"
              audiohandler
            ></a-sound>
          </a-marker>
        </a-scene>
      </>
    );
  }
}

export default Sound;
