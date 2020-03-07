import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from "react-router-dom";

import Home from '../../pages/Home';
import Scene from '../../pages/Scene';
import Page from '../Page';

import GlobalStyles from '../../styles/globals';

class App extends React.Component {
  componentDidMount() {
    this.touchable();
  }

  touchable() {
    const typedWindow = window || null;
    const touchsupport =
      'ontouchstart' in typedWindow ||
      typedWindow.navigator.maxTouchPoints > 0 ||
      typedWindow.navigator.msMaxTouchPoints > 0;
    const touchClass = touchsupport ? 'touch' : 'non-touch';

    if (document.documentElement) {
      document.documentElement.classList.add(touchClass);
    }
  }

  render() {
    const { location: { pathname } } = this.props;

    return (
      <Page title="AR.js components library">
        <GlobalStyles />
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
