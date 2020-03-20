import React from 'react';
import { Link } from 'react-router-dom';

import CardStyled from './styles';

import placeholder from './placeholder.jpg';

class Card extends React.Component {
  render() {
    const { slug, name, img = placeholder } = this.props;

    return (
      <CardStyled>
        <Link to={slug}>
        {/* <Link to={`${process.env.REACT_BASE_PATH}/${slug}`}> */}
          <img src={img} alt={`${name} component`} />
          <p>{name}</p>
        </Link>
      </CardStyled>
    );
  }
}

export default Card;
