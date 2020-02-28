import React from "react";

import withScene from '../../hoc/withScene';

// const floatingAnimation = 'property: position; to: 0 0 -1; to: 0 0 1; dir: alternate; loop: true; dur: 1000;';
const rotatingAnimation = 'property: rotation; to: 0 0 360; loop: true; dur: 7000; easing: linear';

const Model = () => (
  <>
    <a-assets>
      <a-asset-item id="model" src="./models/runroom/model.obj"></a-asset-item>
    </a-assets>
    <a-marker preset="hiro">
      <a-obj-model
        animation={rotatingAnimation}
        src="#model"
        material="src: ./images/background.jpg;"
        side="double"
        position="0 0 0"
        scale="2 2 2"
      >
      </a-obj-model>
    </a-marker>
  </>
);

export default withScene(Model);
