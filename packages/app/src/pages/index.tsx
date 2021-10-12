/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';

import { HStack, VStack, GridContainer } from '@hermes/design-system';

export const stackStyle = css`
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

export const gridStyle = css`
  width: 220px;
  background: beige;
  padding: 10px;

  & > * {
    height: 40px;
    background: cornflowerblue;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <h1>에르메스 - 공유 블로그</h1>
      <HStack css={stackStyle}>
        <div>안녕</div>
        <div>하세요</div>
        <div>잘부탁드려요</div>
      </HStack>
      <VStack css={stackStyle}>
        <div>안녕</div>
        <div>하세요</div>
        <div>잘부탁드려요</div>
      </VStack>
      <GridContainer
        css={gridStyle}
        gridGap={10}
        gridTemplateColumns="repeat(3, 1fr)"
      >
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
      </GridContainer>
    </div>
  );
};

export default Home;
