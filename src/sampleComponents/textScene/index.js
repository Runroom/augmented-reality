import React from "react";

// const Scene = ({ content }) => {
//   return (
//       <a-marker preset="kanji">
//         {content.map(({ color, text }, i) => (
//           <a-entity
//             key={`text-${i}`}
//             position={`0 0 ${i * 0.5}`}
//             geometry="primitive: plane; width: auto; height: auto"
//             material="color: #00aaff"
//             align="left"
//             rotation="-90 0 0"
//             text={`color: ${color}; wrap-count: 10; font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; value: ${text};`}
//           ></a-entity>
//         ))}
//       </a-marker>
//   );
// };
const Scene = ({ text }) => {
  return (
    <a-marker preset="kanji">
      <a-plane
        color="white"
        rotation="-90 0 0"
        position="0 -0.25 0"
        width="3"
        material="transparent: true; opacity: 0.90"
        geometry=""
      ></a-plane>
      <a-text
        value={text}
        color="red"
        rotation="-90 0 0"
        position="0 0 0"
        align="left"
        scale="2 2 2"
        wrap-count="15"
        font="fonts/Roobert-Medium-msdf.json"
        negate="false"
        text=""
      ></a-text>
    </a-marker>
  );
};

export default Scene;
