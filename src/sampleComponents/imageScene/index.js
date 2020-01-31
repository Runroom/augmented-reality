import React from "react";

// Try image with plane https://aframe.io/docs/1.0.0/primitives/a-plane.html#sidebar

const Scene = ({ src }) => (
  <>
    <a-assets>
      <img id="transpImage" src={src} alt="" />
    </a-assets>
    <a-marker
      preset="hiro"
      // type="pattern" url="./patterns/face/pattern-face.patt"
    >
      <a-image
        width="4"
        height="4"
        position="0 -4 0"
        rotation="-90 0 0"
        src="#transpImage"
      ></a-image>
    </a-marker>
    <a-camera-static />
  </>
);

export default Scene;
