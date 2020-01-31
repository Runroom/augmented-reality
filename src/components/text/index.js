import React, { useEffect, useState } from "react";

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
    <a-scene embedded arjs="trackingMethod: best;">
      <a-marker preset="hiro">
        <a-entity
          scale="2 2 2"
          rotation="-90 0 0"
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
      </a-marker>
      <a-camera-static />
    </a-scene>
  );
}

export default Text;
