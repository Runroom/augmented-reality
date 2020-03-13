import styled from 'styled-components';

import { theme } from '../../config';
import { hover } from '../../styles/helpers';
import { space } from '../../styles/rhythm';

const CardStyled = styled.div`
  margin-bottom: ${space()};

  a {
    display: block;
    text-decoration: none;

    ${hover`
      color: ${theme.colors.secondary300};
    `}
  }

  img { width: 100%; }
  p { margin-top: ${space(.5)}; }
`;

export default CardStyled;
