/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';

import { colors } from 'styles/colors';

import Icon, { IconProps } from './Icon';

export default {
  title: 'Base / Icon',
  components: Icon,
} as Meta;

const IconBase: Story<IconProps> = () => {
  return <Icon name="uil-0-plus" size={20} color={colors.black} />;
};

export const Base = IconBase.bind({});
