import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from "react-router-dom";

import Home from '../../pages/Home';
import Scene from '../../pages/Scene';
import Page from '../Page';

class App extends React.Component {
  render() {
    const { location: { pathname } } = this.props;

    return (
      <Page title="AR.js components library">
        <Switch>
          <Route path='/' component={Home} exact />
          <Route>
            <Scene component={pathname.replace('/', '')} />
          </Route>
        </Switch>
      </Page>
    );
  }
}

export default withRouter(App);
