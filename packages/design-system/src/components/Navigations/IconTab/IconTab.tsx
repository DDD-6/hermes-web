import styled from '@emotion/styled';
import React, { useState } from 'react';

import Title from '../../Base/Text/Title';
import { VStack } from '../../Layout/StackContainer';
import { GridContainer } from '../../Layout/GridContainer';
import Tab, { ModeType } from './Tab';

const Container = styled.div`
  width: 64px;
  height: 32px;
  display: flex;
`;

const IconTab = () => {
  const [mode, setMode] = useState<ModeType>('card');
  const onClick = (m: ModeType) => {
    setMode(m);
  };
  return (
    <>
      <Title type="4">현재 탭 : {mode}</Title>
      <Container>
        <Tab
          isSelected={mode === 'card'}
          mode="card"
          onClick={() => onClick('card')}
        />
        <Tab
          isSelected={mode === 'list'}
          mode="list"
          onClick={() => onClick('list')}
        />
      </Container>
      {mode === 'card' ? (
        <GridContainer gap={40} gridTemplateColumns="repeat(2, 1fr)">
          <div>Dummy</div>
          <div>Dummy</div>
          <div>Dummy</div>
          <div>Dummy</div>
        </GridContainer>
      ) : (
        <VStack gap={40}>
          <div>Dummy</div>
          <div>Dummy</div>
          <div>Dummy</div>
          <div>Dummy</div>
        </VStack>
      )}
    </>
  );
};

export default IconTab;
