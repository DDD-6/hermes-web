import React from 'react';
import { VStack, HStack } from '../../../components/Layout/StackContainer';
import Tooltips, { TooltipsProps } from './Tooltips';
import { colors } from '../../../styles';

export default {
  title: 'Popover / Tooltips',
  components: Tooltips,
  args: {
    tooltipText: 'Tooltip with border',
    width: 300,
    minHeight: 120,
    backgroundColor: colors.grey11,
    color: colors.white,
  },
};

export const Base = (args) => {
  return (
    <>
      <HStack>
        <VStack gap={30}>
          <Tooltips {...args} position="Up-Left" />
          <Tooltips {...args} position="Left-Top" />
          <Tooltips {...args} position="Left" />
          <Tooltips {...args} position="Left-Bottom" />
          <Tooltips {...args} position="Down-Left" />
        </VStack>
        <VStack gap={30}>
          <Tooltips {...args} position="Up" />
          <div style={{ width: 300, height: 120, padding: 10 }} />
          <div style={{ width: 300, height: 120, padding: 10 }} />
          <div style={{ width: 300, height: 120, padding: 10 }} />
          <Tooltips {...args} position="Down" />
        </VStack>
        <VStack gap={30}>
          <Tooltips {...args} position="Up-Right" />
          <Tooltips {...args} position="Right-Top" />
          <Tooltips {...args} position="Right" />
          <Tooltips {...args} position="Right-Bottom" />
          <Tooltips {...args} position="Down-Right" />
        </VStack>
      </HStack>
    </>
  );
};
