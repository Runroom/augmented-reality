import React from "react";

const vertexShader = `
  uniform float time;
  uniform vec2 resolution;

  void main()	{
      gl_Position = vec4( position, 1.0 );
  }
`;
const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;

  void main()	{
      float x = mod(time + gl_FragCoord.x, 20.) < 10. ? 1. : 0.;
      float y = mod(time + gl_FragCoord.y, 20.) < 10. ? 1. : 0.;
      gl_FragColor = vec4(vec3(min(x, y)), 1.);
  }
`;

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
        // const material = new THREE.MeshBasicMaterial({ color: data.color, side: THREE.DoubleSide });
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { type: "f", value: 1.0 },
            resolution: { type: "v2", value: new THREE.Vector2() }
          },
          vertexShader,
          fragmentShader
        });
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
            custom-texture="width: 1; height: 1; color: orange;"
            position="0 0 0"
            rotation="-90 0 0"
          ></a-entity>
        </a-marker>
      </a-scene>
    );
  }
}

export default JSComponent;
