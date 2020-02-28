import React from "react";

class JSComponent extends React.Component {
  state = {
    playing: true
  };

  constructor(props) {
    super(props);

    const AFRAME = window.AFRAME;
    const THREE = window.THREE;

    AFRAME.registerComponent('custom-texture', {
      schema: {
        width: { type: 'number', default: 1 },
        height: { type: 'number', default: 1 },
        color: { type: 'color', default: '#ffff00' }
      },
      init: function () {
        var data = this.data;
        var el = this.el;

        const geometry = new THREE.PlaneGeometry(data.width, data.height);
        const material = new THREE.MeshBasicMaterial({ color: data.color, side: THREE.DoubleSide });
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
            custom-texture="width: 3; height: 1.5; color: orange;"
            position="0 0 0"
            rotation="-90 0 0"
          ></a-entity>
        </a-marker>
      </a-scene>
    );
  }
}

export default JSComponent;
