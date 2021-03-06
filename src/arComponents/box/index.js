import React from "react";

import withScene from '../../hoc/withScene';

class Box extends React.Component {
  render() {
    return (
      <a-marker-camera preset="hiro">
        <a-box position="0 0.5 0" material="color: yellow; opacity: 0.5;"></a-box>
      </a-marker-camera>
    );
  }
};

export default withScene(Box);
