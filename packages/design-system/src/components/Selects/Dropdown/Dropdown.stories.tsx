/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';
import { Children, useMemo, useState } from 'react';

import Dropdown, { DropdownProps, DropdownOption } from './Dropdown';
import { HStack } from '../../Layout';
import { Tag } from '../../Displays';

const dummyOptions = [
  {
    id: '1',
    name: '스페이스1',
    checked: false,
  },
  {
    id: '2',
    name: '스페이스2',
    checked: false,
  },
  {
    id: '3',
    name: '스페이스3',
    checked: false,
  },
  {
    id: '4',
    name: '스페이스4',
    checked: false,
  },
  {
    id: '5',
    name: '스페이스5',
    checked: false,
  },
];

export default {
  title: 'Selects / Dropdown',
  components: Dropdown,
  args: {
    type: 'multiple',
    placeholder: '스페이스 선택',
    hasCheckbox: true,
  },
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const DropdownBase: Story<DropdownProps> = (args) => {
  const [options, setOptions] = useState<DropdownOption[]>(dummyOptions);

  const handleClose = (option: DropdownOption) => () => {
    setOptions((old) =>
      old.map((o) => (o.id === option.id ? { ...o, checked: false } : o)),
    );
  };

  const display = useMemo(() => {
    const selectedOptions = options.filter((option) => option.checked);

    if (!selectedOptions.length) {
      return null;
    }

    return (
      <HStack gap={6} flexWrap="wrap">
        {Children.toArray(
          selectedOptions.map((selectedOption) => (
            <Tag onClose={handleClose(selectedOption)}>
              {selectedOption.name}
            </Tag>
          )),
        )}
      </HStack>
    );
  }, [options]);

  return (
    <div className="Inputs-container">
      <Dropdown
        {...args}
        display={display}
        options={options}
        onOptionClick={setOptions}
      />
    </div>
  );
};

export const Base = DropdownBase.bind({});
