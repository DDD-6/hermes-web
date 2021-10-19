import { css } from '@emotion/react';

export const classStyles = css`
  /** Base > Text */
  .Text-basic {
    margin-bottom: 20px;
  }

  .Text-container {
    align-items: center;
    margin-bottom: 20px;
  }

  .Text-title {
    width: 150px;
  }

  /** Layout > GridContainer */
  .GridContainer-container {
    width: 220px;
    background: beige;
    padding: 10px;
  }

  .GridContainer-innerBox {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: cornflowerblue;
  }

  /** Layout > StackContainer */
  .StackContainer-container {
    height: 100%;
  }

  .StackContainer-title {
    margin-bottom: 10px;
  }

  .StackContainer-row {
    height: 80px;
    background: beige;
    margin-bottom: 10px;

    & > div > div {
      &:not(:last-of-type) {
        margin-right: 2px;
      }
    }
  }

  .StackContainer-column {
    width: 100px;
    height: 250px;
    background: beige;
    margin-bottom: 10px;

    &:not(:last-of-type) {
      margin-right: 20px;
    }

    & > div > div {
      &:not(:last-of-type) {
        margin-bottom: 2px;
      }
    }
  }

  .StackContainer-grid {
    width: 110px;
    background: beige;
    padding: 10px;
  }

  .StackContainer-innerBox {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: cornflowerblue;
  }
`;
