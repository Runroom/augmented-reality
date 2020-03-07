import React from 'react';
import { Link } from 'react-router-dom';

import CardStyled from './styles';

class Card extends React.Component {
  render() {
    const { slug, name } = this.props;

    return (
      <CardStyled>
        <Link to={slug}>
          <img src="" alt={`${name} component`} />
          <p className="p-small">{name}</p>
        </Link>
      </CardStyled>
    );
  }
}

export default Card;
