import React from "react";
import { withRouter } from 'react-router';
import { Switch, Route } from "react-router-dom";

import Animation from '../animation';
import Box from '../box';
import Home from '../home';
import Text from '../text';
import Image from '../image';
import Model from '../model';
import Video from '../video';
import JSComponent from '../jsComponent';
import { Scene } from './styles';

class App extends React.Component {
  render() {
    const componentType = {
      animation: Animation,
      box: Box,
      text: Text,
      image: Image,
      model: Model,
      video: Video,
      jsComponent: JSComponent,
    };

    return (
      <Switch>
        <Route path='/' component={Home} exact />
        {Object.keys(componentType).map(key => {
          const Component = componentType[key];

          return (
            <Route key={key} path={`/${key}`}>
              <Scene>
                <Component />
              </Scene>
            </Route>
          );
        })}
      </Switch>
    );
  }
}

export default withRouter(App);
