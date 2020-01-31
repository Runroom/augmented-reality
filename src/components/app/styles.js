import styled from 'styled-components';

const AppWrapper = styled.div`
  .component-selector {
    position: absolute;
    z-index: 10;

    @media only screen and (max-width: 639px) {
      bottom: 30px;
      left: 50%;
      transform: translatex(-50%);
    }

    @media only screen and (min-width: 640px) {
      top: 30px;
      right: 30px;
    }
  }
`;

const Scene = styled.div`
  bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default AppWrapper;
export { Scene };
