import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Box from '../box';
import Text from '../text';
import Image from '../image';
// import Model from '../model';

import { capitalize } from '../../utils/helpers'
import history from '../../utils/history'
import AppWrapper, { Scene } from './styles';

class App extends React.Component {
  state = {
    component: 'image'
  };

  render() {
    const { component } = this.state;
    const componentType = {
      box: Box,
      text: Text,
      image: Image,
      // model: Model
    };
    return (
      <AppWrapper>
        <Router>
          <select
            className="component-selector"
            value={component}
            onChange={event => {
              const component = event.currentTarget.value;

              history.push(`/${component}`);
            }}
          >
            {Object.keys(componentType).map(key => <option key={key} value={key}>{capitalize(key)}</option>)}
          </select>
          <Scene>
            <Switch>
              <Route path='/' component={Box} exact />
              {Object.keys(componentType).map(key => <Route key={key} path={`/${key}`} component={componentType[key]} />)}
            </Switch>
          </Scene>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;
