/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';

import HStack, { HStackProps } from './HStack';

export default {
  title: 'Layout / HStack',
  components: HStack,
} as Meta;

const HStackBase: Story<HStackProps> = (args) => {
  return (
    <HStack
      className="HStack-container"
      alignItems="center"
      justifyContent="center"
      {...args}
    >
      {['A', 'B', 'C', 'D', 'E'].map((item) => (
        <div key={item} className="HStack-innerBox">
          {item}
        </div>
      ))}
    </HStack>
  );
};

export const Base = HStackBase.bind({});

export const variations = (args: HStackProps) => {
  return (
    <div>
      <h1 className="HStack-title">justify content</h1>
      <div className="HStack-box">
        <Base {...args} justifyContent="flex-start" />
      </div>
      <div className="HStack-box">
        <Base {...args} justifyContent="center" />
      </div>
      <div className="HStack-box">
        <Base {...args} justifyContent="flex-end" />
      </div>
      <div className="HStack-box">
        <Base {...args} justifyContent="space-between" />
      </div>
      <h1 className="HStack-title">align items</h1>
      <div className="HStack-box">
        <Base {...args} alignItems="flex-start" />
      </div>
      <div className="HStack-box">
        <Base {...args} alignItems="center" />
      </div>
      <div className="HStack-box">
        <Base {...args} alignItems="flex-end" />
      </div>
    </div>
  );
};
