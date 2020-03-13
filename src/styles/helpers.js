import { css } from 'styled-components';

import { space } from './rhythm';

const pixelate = n => `${n}px`;

const hover = (...args) => css`
  &:hover {
    html.non-touch &:hover {
      ${css.call(null, ...args)};
    }
  }
`;

const hexToRgb = hex => {
  if (hex[0] === '#') {
    hex = hex.substr(1);
  }
  if (hex.length === 3) {
    const hr = hex[0];
    const hg = hex[1];
    const hb = hex[2];

    return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
  }

  const [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexCh => parseInt(hexCh, 16));

  return { r, g, b };
};

const rgbToHex = (r, g, b) => {
  return [r, g, b]
    .map(decCh => Math.max(0, Math.min(255, decCh)).toString(16))
    .map(hexCh => (hexCh.length === 1 ? `0${hexCh}` : hexCh))
    .join('');
};

const getRatio = (
  originalWidth,
  originalHeight,
  width = 0,
  height = 0
) => {
  let finalHeight;
  let finalWidth;

  if (width > 0) {
    finalHeight = Math.ceil((width / originalWidth) * originalHeight) + 'px';
    finalWidth = `${width}px`;
  } else {
    finalHeight = `${height}px`;
    finalWidth = Math.ceil((height / originalHeight) * originalWidth) + 'px';
  }
  return `
    height: ${finalHeight};
    width: ${finalWidth};
  `;
};

const columns = (number, spaces = 1) => `
  width: calc((100% - ${space(spaces * (number - 1))}) / ${number});

  &:nth-child(n) { margin-right: ${space(spaces)}; }
  &:nth-child(${number}n) { margin-right: 0; }
`;

export { columns, getRatio, hexToRgb, hover, rgbToHex, pixelate };
