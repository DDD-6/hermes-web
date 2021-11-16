/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';
import { ChangeEvent, useEffect, useState } from 'react';

import Input, { InputProps } from './Input';
import { HStack, VStack } from '../../Layout';
import { Paragraph } from '../../Base';

export default {
  title: 'Inputs / Input',
  components: Input,
  args: {
    label: '타이틀',
    placeholder: '내용을 입력하세요',
    errorMessage: '필수적으로 입력이 필요합니다',
  },
} as Meta;

const InputBase: Story<InputProps> = (args) => {
  const { errorMessage, ...restArgs } = args;

  return (
    <div className="Inputs-container">
      <Input {...restArgs} errorMessage={errorMessage} />
    </div>
  );
};

export const Base = InputBase.bind({});

export const InputStates = (args: InputProps) => {
  return (
    <VStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Inputs-case">
          initial
        </Paragraph>
        <Base {...args} />
      </HStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Inputs-case">
          focused
        </Paragraph>
        <Base {...args} defaultValue="내용 입력 중" autoFocus />
      </HStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Inputs-case">
          blurred
        </Paragraph>
        <Base {...args} defaultValue="내용 입력" />
      </HStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Inputs-case">
          disabled
        </Paragraph>
        <Base {...args} defaultValue="내용 입력" disabled />
      </HStack>
    </VStack>
  );
};
// autoFocus 케이스로 인해 args값이 변경될시 canvas로 포커스가 강제 이동되는 이슈가 있어 disable처리
InputStates.argTypes = {
  label: {
    defaultValue: '타이틀',
    table: { disable: true },
  },
  placeholder: {
    table: { disable: true },
  },
  errorMessage: {
    table: { disable: true },
  },
};

export const ControlledInput = ({
  errorMessage: errorMessageProp,
  ...args
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);
  };

  useEffect(() => {
    if (inputValue.length >= 10) {
      setErrorMessage(errorMessageProp ?? '');
    } else {
      setErrorMessage('');
    }
  }, [inputValue, errorMessageProp]);

  return (
    <Base
      {...args}
      controlledValue={inputValue}
      onChange={handleChange}
      maxLength={10}
      errorMessage={errorMessage}
    />
  );
};
ControlledInput.args = {
  errorMessage: '10자 이내로 입력하세요',
};
