import React from "react";

class JSComponent extends React.Component {
  constructor(props) {
    super(props);

    const AFRAME = window.AFRAME;
    const THREE = window.THREE;

    AFRAME.registerComponent('plane', {
      schema: {
        width: {type: 'number', default: 1},
        height: {type: 'number', default: 1},
        color: {type: 'color', default: '#AAA'}
      },
      init: function () {
        console.log('Init');

        var data = this.data;
        var el = this.el;

        const geometry = new THREE.PlaneGeometry(data.width, data.height);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(geometry, material);

        el.setObject3D('mesh', mesh);
      }
    });
  }

  render() {
    return (
      <a-scene>
        <a-marker preset="hiro">
          <a-entity
            plane="width: 1; height: 1; color: orange"
            position="0 0 0"
            rotation="-90 0 0"
          ></a-entity>
        </a-marker>
      </a-scene>
    );
  }
}

export default JSComponent;
