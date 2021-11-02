import { Story } from '@storybook/react';
import { Pagination, PaginationProps } from '.';

export default {
  title: 'Navigations / Pagination',
  components: Pagination,
  args: {
    totalCount: 40,
    contentsPerPage: 10,
    siblingCount: 2,
  },
};

export const Base: Story<PaginationProps> = (args) => <Pagination {...args} />;
