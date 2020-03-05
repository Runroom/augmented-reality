import React from 'react';
// import { Link } from 'react-router';

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
      <>
        <h1>AR.js Examples library</h1>
        <div className="section">
          <h2>Components</h2>
          <ul>
            {components.map(name => (<li><a href={`/${name}`}>{capitalize(name)}</a></li>))}
          </ul>
          <hr />
        </div>
        <div className="section">
          <h2>Examples</h2>
          <ul>
            {examples.map(name => (<li><a href={`/${name}`}>{capitalize(name)}</a></li>))}
          </ul>
        </div>
      </>
    );
  }
};

export default Home;
