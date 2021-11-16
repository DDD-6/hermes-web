/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';
import { ChangeEvent, Children, useState } from 'react';

import Checkbox, { CheckboxProps } from './Checkbox';
import { HStack, VStack } from '../../Layout';
import { Paragraph } from '../../Base';

export default {
  title: 'Inputs / Checkbox',
  components: Checkbox,
  args: {
    label: '스페이스명',
  },
} as Meta;

const CheckboxBase: Story<CheckboxProps> = (args) => {
  const { id = 'base', ...restArgs } = args;

  return (
    <div className="Inputs-container">
      <Checkbox id={id} {...restArgs} />
    </div>
  );
};

export const Base = CheckboxBase.bind({});

export const CheckboxStates = (args: CheckboxProps) => {
  return (
    <VStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Inputs-case">
          initial
        </Paragraph>
        <HStack className="Inputs-subcase">
          <Base {...args} id="1" />
          <Base {...args} id="2" disabled />
        </HStack>
      </HStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Inputs-case">
          checked
        </Paragraph>
        <HStack className="Inputs-subcase">
          <Base {...args} id="3" defaultChecked />
          <Base {...args} id="4" defaultChecked disabled />
        </HStack>
      </HStack>
    </VStack>
  );
};

export const DynamicCheckbox = (args: CheckboxProps) => {
  const [allLabel, setAllLabel] = useState<string>('전체 선택X');
  const [checkedAll, setCheckedAll] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setAllLabel(`전체 선택${checked ? 'O' : 'X'}`);
    setCheckedAll(checked);
  };

  return (
    <div>
      <Base {...args} id="all" label={allLabel} onChange={handleChange} />
      {Children.toArray(
        ['1', '2', '3', '4', '5'].map((label) => (
          <Base
            {...args}
            id={label}
            label={label}
            defaultChecked={checkedAll}
            disabled
          />
        )),
      )}
    </div>
  );
};
DynamicCheckbox.argTypes = {
  label: {
    table: {
      disable: true,
    },
  },
};
