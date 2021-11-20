/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';

import Tag, { TagProps } from './Tag';

export default {
  title: 'Displays / Tag',
  components: Tag,
  args: {
    isClosable: true,
    children: '스페이스',
  },
} as Meta;

const TagBase: Story<TagProps> = (args) => {
  const handleClose = () => {
    console.log('close tag');
  };

  return <Tag {...args} onClose={handleClose} />;
};

export const Base = TagBase.bind({});
