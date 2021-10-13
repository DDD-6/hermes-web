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
} as Meta;

export const Variations: Story<TextProps> = (args) => {
  return (
    <div>
      <Text {...args} className="Text-basic">
        기본 글꼴: Pretendard
      </Text>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 1</Text>
        <Title {...args} type="1">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 2</Text>
        <Title {...args} type="2">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 3</Text>
        <Title {...args} type="3">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 4</Text>
        <Title {...args} type="4">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 5</Text>
        <Title {...args} type="5">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 6</Text>
        <Title {...args} type="6">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 7</Text>
        <Title {...args} type="7">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 8</Text>
        <Title {...args} type="8">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 9</Text>
        <Title {...args} type="9">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Title 10</Text>
        <Title {...args} type="10">
          {dummyText}
        </Title>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Paragraph 1</Text>
        <Paragraph {...args} type="1">
          {dummyText}
        </Paragraph>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Paragraph 2</Text>
        <Paragraph {...args} type="2">
          {dummyText}
        </Paragraph>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Paragraph 3</Text>
        <Paragraph {...args} type="3">
          {dummyText}
        </Paragraph>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Caption 1</Text>
        <Caption {...args} type="1">
          {dummyText}
        </Caption>
      </StackContainer>
      <StackContainer className="Text-container">
        <Text className="Text-title">Caption 2</Text>
        <Caption {...args} type="2">
          {dummyText}
        </Caption>
      </StackContainer>
    </div>
  );
};
