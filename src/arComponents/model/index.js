import React from "react";

import withScene from '../../hoc/withScene';

import { rotatingAnimation } from '../../utils/animations';

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
