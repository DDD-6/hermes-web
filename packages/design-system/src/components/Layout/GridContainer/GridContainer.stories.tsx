/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';

import GridContainer, { GridContainerProps } from './GridContainer';

export default {
  title: 'Layout / GridContainer',
  components: GridContainer,
} as Meta;

const GridContainerBase: Story<GridContainerProps> = (args) => {
  return (
    <div className="GridContainer-container">
      <GridContainer gridTemplateColumns="repeat(3, 1fr)" gap={10} {...args}>
        {['A', 'B', 'C', 'D', 'E'].map((item) => (
          <div key={item} className="GridContainer-innerBox">
            {item}
          </div>
        ))}
      </GridContainer>
    </div>
  );
};

export const Base = GridContainerBase.bind({});
