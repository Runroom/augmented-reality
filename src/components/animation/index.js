import React, { useEffect, useState } from 'react';

import withScene from '../../hoc/withScene';

const MAX_CIRCLES = 5;

const Animation = () => {
  const [positions, setPositions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let temp = [];

    for (let i = 0; i <= MAX_CIRCLES; i++) temp.push(i * 0.25);

    setPositions(temp);
    setLoaded(true);
  }, []);

  return loaded && (
    <>
      <a-assets>
        <a-asset-item id="model" src="./models/example/model.obj"></a-asset-item>
        <a-asset-item id="texture" src="./models/example/model.mtl"></a-asset-item>
      </a-assets>
      <a-marker preset="hiro">
        {positions.map((position, i) => (
          <a-entity
            key={i}
            animation={`property: position; from: 0 -0.5 0; to: 0 ${position} 0; dir: alternate; loop: 2; dur: 1500; delay: 5000;`}
            geometry="primitive: torus; radius: 1; radiusTubular: 0.025; arc: 360"
            material="side: double; color: #5214FF; opacity: 0.7;"
            position="0 -0.5 0"
            rotation="90 0 0"
            scale="0.75 0.75 0.75"
          >
          </a-entity>
        ))}
        <a-entity
          animation__scale={`property: scale; from: 0.25 0.25 0.25; to: 0.9 0.9 0.9; dur: 800; delay: 6600;`}
          position="0 0 0"
          scale="0 0 0"
        >
          <a-entity
            animation={`property: material.opacity; from: 0; to: .3; dur: 100; delay: 6600;`}
            animation__opacity={`property: material.opacity; from: 0.3; to: 0; dur: 100; delay: 8000;`}
            animation__dissapear={`property: scale; from: 1 1 1; to: 0 0 0; dur: 0; delay: 8100;`}
            geometry="primitive: box;"
            material="color: #00C7FF; opacity: 0;"
            position="0 0 0"
            scale="1 1 1"
          ></a-entity>
          <a-obj-model
            animation__launch={`property: position; from: 0 -0.5 0; to: 0 6 0; dur: 1600; delay: 8000; easing: easeInExpo;`}
            animation__fase={`property: material.opacity; from: 1; to: 0; dur: 300; delay: 9600;`}
            animation__dissapear={`property: scale; from: 0.05 0.05 0.05; to: 0 0 0; dur: 0; delay: 9900;`}
            animation__position={`property: position; from: 0 6 0; to: 0 -0.5 0; dur: 0; delay: 9900;`}
            src="#model"
            mtl="#texture"
            side="double"
            position="0 -0.5 0"
            scale="0.05 0.05 0.05"
          ></a-obj-model>
        </a-entity>
      </a-marker>
    </>
  )
};

export default withScene(Animation);
