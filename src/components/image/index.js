import React from "react";

import withScene from '../../hoc/withScene';

const src = './images/image.png';

const Image = () => (
  <>
    <a-assets>
      <img id="image" src={src} alt="" />
    </a-assets>
    <a-marker preset="hiro">
      <a-image
        width="4"
        height="4"
        position="0 -4 0"
        src="#image"
      ></a-image>
    </a-marker>
  </>
);

export default withScene(Image);
