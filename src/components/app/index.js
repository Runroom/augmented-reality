import React from "react";

import Box from '../box';
import Text from '../text';
import Image from '../image';

import { capitalize } from '../../utils/helpers'
import AppWrapper, { Scene } from './styles';

class App extends React.Component {
  state = {
    component: 'text'
  };

  render() {
    const { component } = this.state;

    const componentType = {
      box: Box,
      text: Text,
      image: Image
    };
    const Component = componentType[component];

    return (
      <AppWrapper>
        <select
          className="component-selector"
          onChange={event => {
            const component = event.currentTarget.value;

            this.setState({ component })
          }}
        >
          {Object.keys(componentType).map(key => {
            return <option value={key}>{capitalize(key)}</option>;
          })}
        </select>
        <Scene>
          <a-scene embedded arjs="trackingMethod: best;">
            <Component />
            <a-camera-static />
          </a-scene>
        </Scene>
      </AppWrapper>
    );
  }
}

export default App;
