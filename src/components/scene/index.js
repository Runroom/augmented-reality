import React from 'react';

import Text from '../text';
import SceneWrapper from './styles';

const Scene = ({ componentType }) => {
  const iconType = {
    text: Text
  };
  const Component = iconType[componentType];

  return (
    <SceneWrapper>
      <a-scene embedded arjs="trackingMethod: best;">
        <Component />
        <a-camera-static />
      </a-scene>
    </SceneWrapper>
  );
};

export default Scene;
