import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import history from './utils/history'

import App from './components/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router history={history}><App /></Router>, document.getElementById('root'));

serviceWorker.unregister();
