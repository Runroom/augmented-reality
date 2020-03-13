import styled from 'styled-components';

import { theme } from '../config';
import { media } from './media-queries';
import { columns, pixelate } from './helpers';
import { space } from './rhythm';

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${pixelate(theme.layout.maxContentWidth)};
  padding: 0 ${space()};
  width: 100%;

  ${media.min('tablet')`
    padding: 0 ${space(2)};
  `};

  &.reading {
    max-width: ${pixelate(theme.layout.maxReadingWidth)};

    ${media.min('reader')`
      padding-left: 0;
      padding-right: 0;
    `};
  }
`;

const CardsList = styled.ul`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  li {
    ${media.min('tablet')`
      ${columns(2)}
    `}

    ${media.min('desktop')`
      ${columns(3, 2)}
    `}
  }
`;

export { CardsList, Wrapper };
