/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';
import { useRef, useState } from 'react';

import { HStack, StackContainer, VStack } from '../../Layout/StackContainer';

import ButtonTooltip, { ButtonTooltipProps } from './ButtonTooltip';
import Tooltip, { TooltipProps } from './Tooltip';

export default {
  title: 'Popovers / Tooltip',
  components: Tooltip,
  args: {
    tipText: 'Tooltip with border',
    buttonText: 'Button',
  },
} as Meta;

export const TooltipStory: Story<TooltipProps> = (args) => {
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
          <Tooltip {...args} show tailPosition="up-left" />
          <Tooltip {...args} show tailPosition="up" />
          <Tooltip {...args} show tailPosition="up-right" />
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <Tooltip {...args} show tailPosition="left-top" />
          <Spacer />
          <Tooltip {...args} show tailPosition="right-top" />
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <Tooltip {...args} show tailPosition="left" />
          <Spacer />
          <Tooltip {...args} show tailPosition="right" />
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <Tooltip {...args} show tailPosition="left-bottom" />
          <Spacer />
          <Tooltip {...args} show tailPosition="right-bottom" />
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <Tooltip {...args} show tailPosition="down-left" />
          <Tooltip {...args} show tailPosition="down" />
          <Tooltip {...args} show tailPosition="down-right" />
        </HStack>
      </VStack>
    </StackContainer>
  );
};

export const ButtonTooltipStory: Story<ButtonTooltipProps> = (args) => {
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
          <ButtonTooltip {...args} show tailPosition="up-left" />
          <ButtonTooltip {...args} show tailPosition="up" />
          <ButtonTooltip {...args} show tailPosition="up-right" />
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <ButtonTooltip {...args} show tailPosition="left-top" />
          <Spacer />
          <ButtonTooltip {...args} show tailPosition="right-top" />
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <ButtonTooltip {...args} show tailPosition="left" />
          <Spacer />
          <ButtonTooltip {...args} show tailPosition="right" />
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <ButtonTooltip {...args} show tailPosition="left-bottom" />
          <Spacer />
          <ButtonTooltip {...args} show tailPosition="right-bottom" />
        </HStack>
        <HStack gap={HSTACK_GAP}>
          <ButtonTooltip {...args} show tailPosition="down-left" />
          <ButtonTooltip {...args} show tailPosition="down" />
          <ButtonTooltip {...args} show tailPosition="down-right" />
        </HStack>
      </VStack>
    </StackContainer>
  );
};

export const HoverTest: Story<TooltipProps> = (args) => {
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
      />
    </>
  );
};
