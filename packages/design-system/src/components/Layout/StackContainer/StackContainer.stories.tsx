/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';

import StackContainer, { StackContainerProps } from './StackContainer';

export default {
  title: 'Layout / StackContainer',
  components: StackContainer,
} as Meta;

const StackContainerBase: Story<StackContainerProps> = (args) => {
  return (
    <StackContainer
      className="StackContainer-container"
      alignItems="center"
      justifyContent="center"
      {...args}
    >
      {['A', 'B', 'C', 'D', 'E'].map((item) => (
        <div key={item} className="StackContainer-innerBox">
          {item}
        </div>
      ))}
    </StackContainer>
  );
};

export const Base = StackContainerBase.bind({});

export const HStackVariations = (args: StackContainerProps) => {
  return (
    <div>
      <h1>HStack Variations</h1>
      <h2 className="StackContainer-title">justify content</h2>
      <div className="StackContainer-row">
        <Base {...args} justifyContent="flex-start" />
      </div>
      <div className="StackContainer-row">
        <Base {...args} justifyContent="center" />
      </div>
      <div className="StackContainer-row">
        <Base {...args} justifyContent="flex-end" />
      </div>
      <div className="StackContainer-row">
        <Base {...args} justifyContent="space-between" />
      </div>
      <h2 className="StackContainer-title">align items</h2>
      <div className="StackContainer-row">
        <Base {...args} alignItems="flex-start" />
      </div>
      <div className="StackContainer-row">
        <Base {...args} alignItems="center" />
      </div>
      <div className="StackContainer-row">
        <Base {...args} alignItems="flex-end" />
      </div>
    </div>
  );
};

export const VStackVariations = (args: StackContainerProps) => {
  return (
    <div>
      <h1>VStack Variations</h1>
      <h2 className="StackContainer-title">justify content</h2>
      <StackContainer>
        <div className="StackContainer-column">
          <Base {...args} direction="column" justifyContent="flex-start" />
        </div>
        <div className="StackContainer-column">
          <Base {...args} direction="column" justifyContent="center" />
        </div>
        <div className="StackContainer-column">
          <Base {...args} direction="column" justifyContent="flex-end" />
        </div>
        <div className="StackContainer-column">
          <Base {...args} direction="column" justifyContent="space-between" />
        </div>
      </StackContainer>
      <h2 className="StackContainer-title">align items</h2>
      <StackContainer>
        <div className="StackContainer-column">
          <Base {...args} direction="column" alignItems="flex-start" />
        </div>
        <div className="StackContainer-column">
          <Base {...args} direction="column" alignItems="center" />
        </div>
        <div className="StackContainer-column">
          <Base {...args} direction="column" alignItems="flex-end" />
        </div>
      </StackContainer>
    </div>
  );
};
