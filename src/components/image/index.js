import React from "react";

const src = './images/image.png';

const Image = () => (
  <a-scene embedded arjs="trackingMethod: best;">
    <a-assets>
      <img id="image" src={src} alt="" />
    </a-assets>
    <a-marker preset="hiro">
      <a-image
        width="4"
        height="4"
        position="0 -4 0"
        rotation="-90 0 0"
        src="#image"
      ></a-image>
    </a-marker>
    <a-camera-static />
  </a-scene>
);

export default Image;
