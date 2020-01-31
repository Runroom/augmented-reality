import React from "react";

const Model = () => (
  <a-scene embedded arjs="trackingMethod: best;">
    <a-assets>
      <a-asset-item id="model-obj" src="./model.obj"></a-asset-item>
      <a-asset-item id="model-mtl" src="./model.mtl"></a-asset-item>
    </a-assets>
    <a-marker preset="hiro">
      <a-obj-model src="#model-obj" mtl="#model-mtl"></a-obj-model>
    </a-marker>
    <a-camera-static />
  </a-scene>
);

export default Model;
