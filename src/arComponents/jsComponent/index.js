import React from "react";

import { Button } from './styles';

class JSComponent extends React.Component {
  state = {
    playing: true
  };

  componentDidMount() {
    const AFRAME = window.AFRAME;
    const THREE = window.THREE;

    AFRAME.registerComponent('custom-box', {
      schema: {
        width: { type: 'number', default: 1 },
        height: { type: 'number', default: 1 },
        depth: { type: 'number', default: 1 },
        color: { type: 'color', default: '#ffff00' }
      },
      init: function () {
        var data = this.data;
        var el = this.el;

        const geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
        const material = new THREE.MeshBasicMaterial({ color: data.color });
        const mesh = new THREE.Mesh(geometry, material);

        el.setObject3D('mesh', mesh);
      },
      tick: function () {
        const increment = THREE.Math.radToDeg(this.el.object3D.rotation.x) + 1;

        this.el.object3D.rotation.x = THREE.Math.degToRad(increment % 359);
      },
      play() {
        console.log('Playing...');
      },
      pause() {
        console.log('Pause!');
      }
    });
  }

  updateTick = () => {
    if (this.entity.isPlaying) {
      this.entity.pause();
      this.setState({ playing: false });
    } else {
      this.entity.play();
      this.setState({ playing: true });
    }
  }

  render() {
    return (
      <>
        <Button onClick={this.updateTick}>
          {this.state.playing ? 'Pause' : 'Play'}
        </Button>
        <a-scene>
          <a-marker preset="hiro">
            <a-entity
              ref={ref => this.entity = ref}
              custom-box="width: 1; height: 1; depth: 1; color: orange;"
              position="0 0 0"
            ></a-entity>
          </a-marker>
        </a-scene>
      </>
    );
  }
}

export default JSComponent;
