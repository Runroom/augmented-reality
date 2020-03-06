import React from 'react';
import { Helmet } from 'react-helmet';

class Page extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </>
    );
  }
};

export default Page;
