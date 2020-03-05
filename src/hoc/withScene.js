import React from 'react';

const withScene = Component => {
  return class extends React.Component {
    render() {
      return (
        <a-scene embedded arjs={`debugUIEnabled: false; trackingMethod: best;`}>
          <Component {...this.props} />
          <a-camera-static />
        </a-scene>
      );
    }
  };
};

export default withScene;
