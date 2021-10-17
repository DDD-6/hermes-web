/** @jsxImportSource @emotion/react */
import { Story, Meta } from '@storybook/react';

import Text, { TextProps } from './Text';
import Title from './Title';
import Paragraph from './Paragraph';
import Caption from './Caption';
import { StackContainer } from '../../Layout';

const dummyText = '에르메스 화이팅 Let’s go WEB2';

export default {
  title: 'Base / Text',
  components: Text,
  args: {
    children: dummyText,
  },
} as Meta;

const TextBase: Story<TextProps> = (args) => {
  return <Text {...args} />;
};

export const Base = TextBase.bind({});

export const Variations: Story<TextProps> = (args) => {
  return (
    <div>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 1</Text>
        <Title {...args} type="1" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 2</Text>
        <Title {...args} type="2" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 3</Text>
        <Title {...args} type="3" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 4</Text>
        <Title {...args} type="4" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 5</Text>
        <Title {...args} type="5" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 6</Text>
        <Title {...args} type="6" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 7</Text>
        <Title {...args} type="7" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 8</Text>
        <Title {...args} type="8" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 9</Text>
        <Title {...args} type="9" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 10</Text>
        <Title {...args} type="10" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Paragraph 1</Text>
        <Paragraph {...args} type="1" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Paragraph 2</Text>
        <Paragraph {...args} type="2" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Paragraph 3</Text>
        <Paragraph {...args} type="3" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Caption 1</Text>
        <Caption {...args} type="1" />
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Caption 2</Text>
        <Caption {...args} type="2" />
      </StackContainer>
    </div>
  );
};
