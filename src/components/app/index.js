import React from "react";
import { withRouter } from 'react-router';
import { Switch, Route } from "react-router-dom";

import Animation from '../animation';
import Box from '../box';
import Text from '../text';
import Image from '../image';
import Model from '../model';
import JSComponent from '../jsComponent';

import { capitalize } from '../../utils/helpers'
import history from '../../utils/history'
import AppWrapper, { Scene } from './styles';

class App extends React.Component {
  state = {
    debug: false
  };

  render() {
    const { location: { pathname } } = this.props;
    const { debug } = this.state;
    const componentType = {
      animation: Animation,
      box: Box,
      text: Text,
      image: Image,
      model: Model,
      jsComponent: JSComponent,
    };

    return (
      <AppWrapper>
        <div className="settings">
          <select
            value={pathname.replace('/', '')}
            onChange={event => {
              const component = event.currentTarget.value;

              history.push(`/${component}`);
            }}
          >
            {Object.keys(componentType).map(key => <option key={key} value={key}>{capitalize(key)}</option>)}
          </select>
          <div>
            <input
              type="checkbox"
              id="debug-enabling"
              onClick={() => {
                this.setState({ debug: !this.state.debug });
              }}
            />
            <label htmlFor="debug-enabled">toggle debug</label>
          </div>
        </div>
        <Scene>
          <Switch>
            <Route path='/' component={Animation} exact />
            {Object.keys(componentType).map(key => {
              const Component = componentType[key];

              return (
                <Route key={key} path={`/${key}`}>
                  <Component debug={debug} />
                </Route>
              );
            })}
          </Switch>
        </Scene>
      </AppWrapper>
    );
  }
}

export default withRouter(App);
