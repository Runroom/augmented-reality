import React from "react";

const Box = () => (
  <a-scene embedded arjs="trackingMethod: best;">
    <a-marker preset="hiro">
      <a-box position="0 0.5 0" material="color: yellow;"></a-box>
    </a-marker>
    <a-camera-static />
  </a-scene>
);

export default Box;
