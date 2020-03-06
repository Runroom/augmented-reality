import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../components/Page';

import { capitalize } from '../../utils/helpers';

const components = [
  'box',
  'text',
  'image',
  'model',
  'video',
  'jsComponent',
];

const examples = ['animation'];

class Home extends React.Component {
  render() {
    return (
      <Page title="AR.js Examples library">
        <h1>AR.js Examples library</h1>
        <div className="section">
          <h2>Components</h2>
          <ul>
            {components.map(name => (<li><Link to={`/${name}`}>{capitalize(name)}</Link></li>))}
          </ul>
          <hr />
        </div>
        <div className="section">
          <h2>Examples</h2>
          <ul>
            {examples.map(name => (<li><Link to={`/${name}`}>{capitalize(name)}</Link></li>))}
          </ul>
        </div>
      </Page>
    );
  }
};

export default Home;
