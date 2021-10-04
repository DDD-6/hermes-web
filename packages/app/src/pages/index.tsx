/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';

import { HStack } from '@hermes/design-system';

export const dummyStyle = css`
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

const Home: NextPage = () => {
  return (
    <div>
      <h1>에르메스 - 공유 블로그</h1>
      <HStack css={dummyStyle}>
        <div>안녕</div>
        <div>하세요</div>
        <div>잘부탁드려요</div>
      </HStack>
    </div>
  );
};

export default Home;
