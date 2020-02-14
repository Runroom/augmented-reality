import React, { useEffect, useState } from 'react';

import withScene from '../../hoc/withScene';

const MAX_CIRCLES = 5;

const Animation = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let temp = [];

    for (let i = 0; i <= MAX_CIRCLES; i++) temp.push(i * 0.25);

    setPositions(temp);
  }, []);

  return (
    <a-marker preset="hiro">
      {positions.map((position, i) => (
        <a-entity
          key={i}
          animation={`property: position; from: 0 -0.5 0; to: 0 ${position} 0; dir: alternate; loop: 2; dur: 1500; delay: 5000`}
          geometry="primitive: torus; radius: 1; radiusTubular: 0.025; arc: 360"
          material="side: double; color: #ff0000;"
          position="0 -0.5 0"
          rotation="90 0 0"
          scale="0.75 0.75 0.75"
        >
        </a-entity>
      ))}
      <a-entity
        animation={`property: material.opacity; from: 0; to: 1; dur: 500; delay: 6600;`}
        animation__scale="property: scale; from: 0.25 0.25 0.25; to: 0.9 0.9 0.9; dur: 500; delay: 6600;"
        geometry="primitive: box;"
        material="color: #00ffff; opacity: 0;"
        position="0 0 0"
      >
      </a-entity>
    </a-marker>
  )
};

export default withScene(Animation);
