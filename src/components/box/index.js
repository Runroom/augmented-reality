import React from "react";

import withScene from '../../hoc/withScene';

const Box = () => (
  <a-marker preset="hiro">
    <a-box position="0 0.5 0" material="color: yellow;"></a-box>
  </a-marker>
);

export default withScene(Box);
