import React from "react";

import withScene from '../../hoc/withScene';

// const src = './images/background.jpg';
const src = 'http://openweathermap.org/img/w/02d.png';

const Image = () => (
  <>
    <a-assets>
      <img id="image" src={src} alt="" />
    </a-assets>
    <a-marker-camera preset="hiro">
      <a-image
        width="4"
        height="4"
        position="0 0 0"
        src="#image"
      ></a-image>
    </a-marker-camera>
  </>
);

export default withScene(Image);
