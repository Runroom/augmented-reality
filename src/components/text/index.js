import React, { useEffect, useState } from "react";

import withScene from '../../hoc/withScene';

const WRAP_COUNT = 25;
const WIDTH = 6;
const MAX_LINES = 3;

const Text = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    let temp = '';

    for (let i = 0; i <= MAX_LINES; i++) {
      temp += `${i + 1}. Line ${i + 1} of text. ${i < MAX_LINES ? '\n' : ''}`;
    }

    setText(temp);
  }, []);

  return (
    <a-marker-camera preset="hiro">
      <a-entity
        scale="2 2 2"
        geometry={`primitive: plane; width: ${WIDTH}; height: auto`}
        material="color: white;"
      >
        <a-text
          value={text}
          color="red"
          position={`-${WIDTH / 1.95} 0 0`}
          align="left"
          wrap-count={WRAP_COUNT}
          font="fonts/Roobert-Medium-msdf.json"
          negate="false"
          anchor="left"
          text=""
        ></a-text>
      </a-entity>
    </a-marker-camera>
  );
}

export default withScene(Text);
