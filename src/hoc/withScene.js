import React from 'react';

const withScene = Component => {
  return class extends React.Component {
    render() {
      const { debug } = this.props;

      return (
        <a-scene embedded arjs={`debugUIEnabled: ${debug}; trackingMethod: best;`}>
          <Component {...this.props} />
          <a-camera-static />
        </a-scene>
      );
    }
  };
};

export default withScene;
