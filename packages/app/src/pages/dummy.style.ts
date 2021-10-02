import { css } from '@emotion/react';

export const dummy = css`
  & > * {
    &:nth-of-type(1) {
      color: red;
    }
    &:nth-of-type(2) {
      color: blue;
    }
    &:nth-of-type(3) {
      color: green;
    }
  }
`;