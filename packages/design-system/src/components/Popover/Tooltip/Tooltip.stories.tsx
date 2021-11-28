/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Story } from '@storybook/react';
import { useRef, useState } from 'react';

import { HStack, StackContainer, VStack } from '../../Layout/StackContainer';

import Tooltip, { TooltipProps } from './Tooltip';

export default {
  title: 'Popovers / Tooltip',
  components: Tooltip,
  args: {
    text: 'Tooltip with border',
  },
};

export const TooltipStory: Story<TooltipProps & { text: string }> = (
  args: TooltipProps & { text: string },
) => {
  const { text } = args;
  const VSTACK_GAP = '74px';
  const HSTACK_GAP = '44px';
  const Spacer = styled.div`
    width: 272px;
    height: 56px;
  `;
  return (
    <StackContainer>
      <VStack gap={VSTACK_GAP}>
        <HStack gap={HSTACK_GAP}>
          <Tooltip {...args} show tailPosition="up-left">
            {text}
          </Tooltip>
          <Tooltip {...args} show tailPosition="up">
            {text}
          </Tooltip>
          <Tooltip {...args} show tailPosition="up-right">
            {text}
          </Tooltip>
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <Tooltip {...args} show tailPosition="left-top">
            {text}
          </Tooltip>
          <Spacer />
          <Tooltip {...args} show tailPosition="right-top">
            {text}
          </Tooltip>
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <Tooltip {...args} show tailPosition="left">
            {text}
          </Tooltip>
          <Spacer />
          <Tooltip {...args} show tailPosition="right">
            {text}
          </Tooltip>
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <Tooltip {...args} show tailPosition="left-bottom">
            {text}
          </Tooltip>
          <Spacer />
          <Tooltip {...args} show tailPosition="right-bottom">
            {text}
          </Tooltip>
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <Tooltip {...args} show tailPosition="down-left">
            {text}
          </Tooltip>
          <Tooltip {...args} show tailPosition="down">
            {text}
          </Tooltip>
          <Tooltip {...args} show tailPosition="down-right">
            {text}
          </Tooltip>
        </HStack>
      </VStack>
    </StackContainer>
  );
};

export const HoverTest = (args) => {
  const wrapperRef = useRef();
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnter = () => {
    setShowTooltip(true);
  };
  const onMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <>
      <div
        style={{ width: 100, height: 100, backgroundColor: 'red' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Tooltip
        {...args}
        show={showTooltip}
        tailPosition="up-left"
        ref={wrapperRef.current}
      >
        Test
      </Tooltip>
    </>
  );
};
