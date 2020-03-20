import React from 'react';
import styled, { keyframes } from 'styled-components';

import { theme } from '../../config';

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LooaderWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.white};
  bottom: 0;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  span {
    animation: ${pulse} 1.5s infinite;
    background-color: ${theme.colors.neutro900};
    border-radius: 50%;
    display: block;
    height: 35px;
    width: 35px;
  }
`;

const Loader = () => (
  <LooaderWrapper>
    <span></span>
  </LooaderWrapper>
);

export default Loader;
