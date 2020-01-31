import React from "react";

import { formatDateTime } from '../../utils/helpers';

const WRAP_COUNT = 25;
const WIDTH = 6;

const RoomInfo = ({ room: { marker, list } }) => {
  let text = '';

  list.forEach(({ node }, i) => {
    const {
      session_name,
      session_datetime,
      session_category
    } = node;

    console.log(session_name, formatDateTime(session_datetime));

    text += `${i < 10 ? '0' : ''}${i + 1}. `;
    text += `${formatDateTime(session_datetime)} - ${session_name} - ${i} ${i !== list.length ? '\n' : ''}`;
  });

  return (
    <a-marker preset={marker}>
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
  );
};

export default RoomInfo;
