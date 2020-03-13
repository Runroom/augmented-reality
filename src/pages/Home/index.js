import React from 'react';

import Page from '../../components/Page';
import Card from '../../components/Card';

import { CardsList, Wrapper } from '../../styles/layout';
import { capitalize } from '../../utils/helpers';
import { structure } from '../../config';

class Home extends React.Component {
  render() {
    return (
      <Page title="AR.js Examples library">
        <Wrapper>
          <h1 className="title1">AR.js Examples library</h1>
          {structure.map(section => (
            <div
              key={`section-${section.name}`}
              name={section.name}
              id={section.name}
              className="section"
            >
              <h2 className="title2">{capitalize(section.name)}</h2>
              <CardsList>
                {section.components.map(component => (
                  <li key={`component-${component.name}`}>
                    <Card slug={component.slug} name={component.name} img={component.img} />
                  </li>
                ))}
              </CardsList>
            </div>
          ))}
        </Wrapper>
      </Page>
    );
  }
};

export default Home;
