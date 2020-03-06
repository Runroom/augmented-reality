import React, { useEffect, useState } from "react";

import withScene from '../../hoc/withScene';

const WRAP_COUNT = 25;
const WIDTH = 3;
const MAX_LINES = 3;

const Text = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    let temp = '';

    for (let i = 0; i <= MAX_LINES; i++) {
      temp += `${i + 1}. ¿ Line ${i + 1} of text of text of text of text. ${i < MAX_LINES ? '\n' : ''}`;
    }

    setText(temp);
  }, []);

  return (
    <a-marker-camera preset="hiro">
      <a-entity
        position={`-${WIDTH / 2} 0 0`}
      >
        <a-text
          geometry={`primitive: plane; width: ${WIDTH}; height: auto;`}
          color="red"
          material="color: transparent; opacity: 0;"
          value={text}
          position="0 0 0"
          wrap-count={WRAP_COUNT}
          // font="fonts/Roobert-Medium-msdf.json"
          // negate="false"
          align="left"
          anchor="left"
        ></a-text>
      </a-entity>
      {/*< a-entity
        scale="2 2 2"
        geometry={`primitive: plane; width: ${WIDTH}; height: auto`}
        material="color: white;"
      >

        <a-text
          value={`Ep que passa`}
          color="red"
          position={`-${WIDTH / 1.95} 0 0`}
          align="left"
          wrap-count={WRAP_COUNT}
          rotate="-90 0 0"
          anchor="left"
        ></a-text> */}
      {/* </a-entity> */}
    </a-marker-camera>
  );
}

export default withScene(Text);
