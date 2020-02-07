import React from "react";
import { withRouter } from 'react-router';
import { Switch, Route } from "react-router-dom";

import Box from '../box';
import Text from '../text';
import Image from '../image';
import Model from '../model';

import { capitalize } from '../../utils/helpers'
import history from '../../utils/history'
import AppWrapper, { Scene } from './styles';

class App extends React.Component {
  render() {
    const { location: { pathname } } = this.props;
    const componentType = {
      box: Box,
      text: Text,
      image: Image,
      model: Model,
    };

    return (
      <AppWrapper>
        <select
          className="component-selector"
          value={pathname.replace('/', '')}
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
      </AppWrapper>
    );
  }
}

export default withRouter(App);
