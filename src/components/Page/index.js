import React from 'react';
import { Helmet } from 'react-helmet';

import PageWrapper from './styles';

class Page extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <PageWrapper>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <main>
          {children}
        </main>
      </PageWrapper>
    );
  }
};

export default Page;
