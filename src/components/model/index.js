import React from "react";

const Model = () => (
  <a-scene embedded arjs="trackingMethod: best;">
    <a-assets>
      <a-asset-item id="model" src="./models/model.obj"></a-asset-item>
      <a-asset-item id="texture" src="./models/model.mtl"></a-asset-item>
    </a-assets>
    <a-marker preset="hiro">
      <a-obj-model
        src="#model"
        mtl="#texture"
        rotation="-90 0 0"
        side="double"
        position="0.0 0.2 0"
        scale="0.1 0.1 0.1"
      >
        <a-animation attribute="position"
          dur="1000"
          direction="alternate"
          from="0 0 -1"
          to="0 0 1"
          repeat="indefinite"
        ></a-animation>
      </a-obj-model>
    </a-marker>
    <a-camera-static />
  </a-scene >
);

export default Model;
