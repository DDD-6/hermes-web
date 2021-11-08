import { Story } from '@storybook/react';
import MenuBar, { MenuBarProps } from './MenuBar';

export default {
  title: 'Navigations / MenuBar',
  components: MenuBar,
};

export const Base: Story<MenuBarProps> = (args) => (
  <MenuBar
    profileSrc="https://www.eatlovesavor.com/wp-content/uploads/2016/05/orange-hermes-box.jpg"
    {...args}
  />
);
