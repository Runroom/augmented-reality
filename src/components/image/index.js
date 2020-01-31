import React from "react";

const src = './image.jpg';

const Image = () => (
  <>
    <a-assets>
      <img id="transpImage" src={src} alt="" />
    </a-assets>
    <a-image
      width="4"
      height="4"
      position="0 -4 0"
      rotation="-90 0 0"
      src="#transpImage"
    ></a-image>
  </>
);

export default Image;
