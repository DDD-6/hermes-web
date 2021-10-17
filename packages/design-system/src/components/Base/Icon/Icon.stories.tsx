/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';

import Icon, { IconProps } from './Icon';

import { colors } from '../../../styles';

export default {
  title: 'Base / Icon',
  components: Icon,
  args: {
    name: 'uil-0-plus',
    size: 20,
    color: colors.black,
  },
} as Meta;

const IconBase: Story<IconProps> = (args) => {
  return <Icon {...args} />;
};

export const Base = IconBase.bind({});
