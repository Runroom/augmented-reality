import React from "react";

import { Button } from './styles';

class Audio extends React.Component {
  // state = {
  //   playing: true,
  //   visible: false
  // };

  componentDidMount() {
    const AFRAME = window.AFRAME;
    const audio = this.audioElement;
    // const { playing } = this.state;

    AFRAME.registerComponent('audiohandler', {
      tick: () => {
        audio.play();

        // const visible = document.querySelector('a-marker').object3D.visible;

        // if (playing) {
        //   if (visible) audio.play();
        //   else audio.pause();
        // }

        // this.setState({ visible });
      }
    });
  }

  // togglePlay = () => {
  //   if (this.state.playing) {
  //     this.audioElement.pause();
  //     this.setState({ playing: false });
  //   } else {
  //     this.audioElement.play();
  //     this.setState({ playing: true });
  //   }
  // }

  render() {
    // const { playing, visible } = this.state;

    return (
      <>
        {/* {visible && ( */}
        {/* <Button onClick={this.togglePlay}>
            {playing ? 'Pause' : 'Play'}
          </Button> */}
        {/* )} */}
        <a-scene>
          <a-marker preset="hiro">
            <a-sound src="src: url(https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3)" crossOrigin="true" autoPlay="true" position="0 2 5"></a-sound>
          </a-marker>
          {/* <a-assets>
            <audio
              ref={ref => this.audioElement = ref}
              id="myaudio"
              controls
              autoPlay
            >
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" crossOrigin="true" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </a-assets>
          <a-marker preset="hiro">
            <a-sound
              src="#myaudio"
              width="16"
              height="9"
              position="0 0 0"
              scale="0.2 0.2 0.2"
              audiohandler
            ></a-sound>
          </a-marker> */}
        </a-scene>
      </>
    );
  }
}

export default Audio;
