/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';

import {
  HStack,
  VStack,
  GridContainer,
  Title,
  Paragraph,
  Caption,
  Text,
  Icon,
  colors,
} from '@hermes/design-system';

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
      <Title type="1">에르메스 - 공유 블로그</Title>
      <Icon name="uil-react" size={20} color={colors.success} />
      <Icon name="uil-strange-icon" size={20} color={colors.error} />
      <HStack css={stackStyle}>
        <Paragraph type="1">39, 12:34, A:가, FE—X SFO → STO</Paragraph>
        <Paragraph type="2">타이포그래피</Paragraph>
        <Paragraph type="3">hamburgefonstiv</Paragraph>
      </HStack>
      <VStack css={stackStyle}>
        <Caption type="1">2021년 6월 28일 오후 12:00</Caption>
        <Caption type="2">
          Lorèm Ipsúm Dólór ßít Amet, Cònßeçtetür ADIPISCING Elìt.
        </Caption>
        <Text>WP0ACO4XSI16O9</Text>
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
