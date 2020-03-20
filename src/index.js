import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";

import history from './utils/history'

import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router history={history} basename={process.env.REACT_BASE_PATH}><App /></Router>, document.getElementById('root'));

serviceWorker.unregister();
