import React from 'react';

const withScene = Component => {
  return class extends React.Component {
    render() {
      const { debug } = this.props;

      return (
        <a-scene embedded arjs={`debugUIEnabled: ${debug}; trackingMethod: best;`}>
          <Component {...this.props} />
          {/* <a-camera-static /> */}
          <a-camera position="0 0 0"></a-camera>
        </a-scene>
      );
    }
  };
};

export default withScene;
