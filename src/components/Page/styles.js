import styled from 'styled-components';

import { space } from '../../styles/rhythm';
import { theme } from '../../config';

const PageWrapper = styled.div`
  padding: ${space()} 0;
  width: 100%;

  main {
    min-height: 100%;
    width: 100%;

    .section {
      border-bottom: 1px solid ${theme.colors.neutro300};
      margin: ${space(2)} 0;
      padding-bottom: ${space()};

      &:last-child { border-bottom: 0; }
    }
  }
`;

export default PageWrapper;
