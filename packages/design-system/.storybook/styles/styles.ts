import { css } from '@emotion/react';

export const classStyles = css`
  /** Layout > HStack */
  .HStack-container {
    height: 100%;
  }

  .HStack-title {
    margin-bottom: 10px;
  }

  .HStack-box {
    height: 80px;
    background: beige;
    margin-bottom: 10px;
  }

  .HStack-innerBox {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: cornflowerblue;

    &:not(:last-of-type) {
      margin-right: 2px;
    }
  }
`;
