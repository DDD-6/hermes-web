/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';
import { ChangeEvent } from 'react';

import Toggle, { ToggleProps } from './Toggle';

export default {
  title: 'Inputs / Toggle',
  components: Toggle,
  args: {
    label: '이어쓰기 모드',
  },
} as Meta;

const ToggleBase: Story<ToggleProps> = (args) => {
  const { id = 'base', ...restArgs } = args;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.checked);
  };

  return (
    <Toggle {...restArgs} id={id} defaultChecked onChange={handleChange} />
  );
};

export const Base = ToggleBase.bind({});
