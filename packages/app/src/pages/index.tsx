/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';

import { HStack } from '@hermes/design-system';

import * as styles from './dummy.style';

const Home: NextPage = () => {
  return (
    <div>
      <h1>에르메스 - 공유 블로그</h1>
      <HStack css={styles.dummy}>
        <div>안녕</div>
        <div>하세요</div>
        <div>잘부탁드려요</div>
      </HStack>
    </div>
  );
};

export default Home;
