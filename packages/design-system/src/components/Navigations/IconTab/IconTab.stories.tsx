import IconTab from './IconTab';

export default {
  title: 'Navigations / IconTab',
  components: IconTab,
  argTypes: {
    // variant: {
    //   options: ['card', 'list'],
    //   control: { type: 'radio' },
    //   defaultValue: 'card',
    // },
  },
};

export const Base = (args) => <IconTab {...args} />;
