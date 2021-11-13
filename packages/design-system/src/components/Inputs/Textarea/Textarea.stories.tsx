/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';
import { FormEvent, MouseEvent, useRef } from 'react';

import Textarea, { TextareaProps } from './Textarea';
import { HStack, VStack } from '../../Layout';
import { Paragraph } from '../../Base';

export default {
  title: 'Inputs / Textarea',
  components: Textarea,
  args: {
    placeholder: '내용을 입력하세요',
  },
} as Meta;

const TextareaBase: Story<TextareaProps> = (args) => {
  return (
    <div className="Textarea-container">
      <Textarea {...args} />
    </div>
  );
};

export const Base = TextareaBase.bind({});

export const TextareaStates = (args: TextareaProps) => {
  return (
    <VStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Textarea-case">
          initial
        </Paragraph>
        <Base {...args} />
      </HStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Textarea-case">
          focused
        </Paragraph>
        <Base {...args} defaultValue="내용 입력 중" autoFocus />
      </HStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Textarea-case">
          blurred
        </Paragraph>
        <Base {...args} defaultValue="내용 입력" />
      </HStack>
      <HStack alignItems="center" mb={20}>
        <Paragraph type="3" className="Textarea-case">
          disabled
        </Paragraph>
        <Base {...args} defaultValue="내용 입력" disabled />
      </HStack>
    </VStack>
  );
};
// autoFocus 케이스로 인해 args값이 변경될시 canvas로 포커스가 강제 이동되는 이슈가 있어 disable처리
TextareaStates.argTypes = {
  placeholder: {
    table: { disable: true },
  },
};

export const WithButton = (args: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (textareaRef.current) {
      textareaRef.current.value = '';
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    console.log(textareaRef?.current?.value);
  };

  return (
    <form className="Textarea-container" onSubmit={handleSubmit}>
      <Textarea
        {...args}
        ref={textareaRef}
        defaultValue=""
        buttons={[
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>,
          <button type="submit" onClick={handleClick}>
            Submit
          </button>,
        ]}
      />
    </form>
  );
};
