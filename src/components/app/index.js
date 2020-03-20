import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from "react-router-dom";

import Home from '../../pages/Home';
import Scene from '../../pages/Scene';

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
      <>
        <GlobalStyles />
        <Switch>
          <Route path={`${process.env.REACT_BASE_PATH}/`} component={Home} exact />
          <Route>
            <Scene component={pathname.replace('/', '')} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
