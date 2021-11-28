/** @jsxImportSource @emotion/react */
import { Meta, Story } from '@storybook/react';
import { HStack, VStack } from 'src';

import { Paragraph } from '../../Base';

import TextButton, { TextButtonProps } from './TextButton';

export default {
  title: 'Buttons / TextButton',
  components: TextButton,
  args: {
    text: 'Button',
  },
} as Meta;

const STYLE_ONLY_FOR_STORY = {
  H_LABEL: {
    LARGE: {
      width: 480,
      color: '#8a8a8a', // * --grey-8
    },
    MEDIUM: {
      width: 200,
      color: '#8a8a8a',
    },
    SMALL: {
      width: 96,
      color: '#8a8a8a',
    },
  },
  V_LABEL: {
    LARGE: {
      width: 160,
      color: '#8a8a8a',
    },
    MEDIUM: {
      width: 99,
      color: '#8a8a8a',
    },
    SMALL: {
      width: 99,
      color: '#8a8a8a',
    },
  },
} as const;

export const Large: Story<TextButtonProps & { text: string }> = ({
  text,
  ...restArgs
}) => {
  return (
    <VStack className="TextButton-large" gap={64}>
      <HStack className="label-horizontal" gap={8}>
        <div style={STYLE_ONLY_FOR_STORY.V_LABEL.LARGE} />
        <Paragraph
          type="1"
          className="label-horizontal__text"
          css={STYLE_ONLY_FOR_STORY.H_LABEL.LARGE}
        >
          filled
        </Paragraph>
        <Paragraph
          type="1"
          className="label-horizontal__text"
          css={STYLE_ONLY_FOR_STORY.H_LABEL.LARGE}
        >
          stroke
        </Paragraph>
        <Paragraph
          type="1"
          className="label-horizontal__text"
          css={STYLE_ONLY_FOR_STORY.H_LABEL.LARGE}
        >
          text
        </Paragraph>
      </HStack>
      <HStack gap={8}>
        <Paragraph
          type="1"
          className="label-vertical"
          style={STYLE_ONLY_FOR_STORY.V_LABEL.LARGE}
        >
          initial
        </Paragraph>
        <TextButton {...restArgs} size="large" state="initial" type="filled">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="large" state="initial" type="stroke">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="large" state="initial" type="text">
          {text}
        </TextButton>
      </HStack>
      <HStack gap={8}>
        <Paragraph
          type="1"
          className="label-vertical"
          style={STYLE_ONLY_FOR_STORY.V_LABEL.LARGE}
        >
          Pressed
        </Paragraph>
        <TextButton {...restArgs} size="large" state="pressed" type="filled">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="large" state="pressed" type="stroke">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="large" state="pressed" type="text">
          {text}
        </TextButton>
      </HStack>
      <HStack gap={8}>
        <Paragraph
          type="1"
          className="label-vertical"
          style={STYLE_ONLY_FOR_STORY.V_LABEL.LARGE}
        >
          Disabled
        </Paragraph>
        <TextButton {...restArgs} size="large" state="disabled" type="filled">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="large" state="disabled" type="stroke">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="large" state="disabled" type="text">
          {text}
        </TextButton>
      </HStack>
    </VStack>
  );
};

export const Medium: Story<TextButtonProps & { text: string }> = ({
  text,
  ...restArgs
}) => {
  return (
    <VStack className="TextButton-medium" gap={64}>
      <HStack className="label-horizontal" gap={8}>
        <div style={STYLE_ONLY_FOR_STORY.V_LABEL.MEDIUM} />
        <Paragraph
          type="1"
          className="label-horizontal__text"
          css={STYLE_ONLY_FOR_STORY.H_LABEL.MEDIUM}
        >
          filled
        </Paragraph>
        <Paragraph
          type="1"
          className="label-horizontal__text"
          css={STYLE_ONLY_FOR_STORY.H_LABEL.MEDIUM}
        >
          stroke
        </Paragraph>
        <Paragraph
          type="1"
          className="label-horizontal__text"
          css={STYLE_ONLY_FOR_STORY.H_LABEL.MEDIUM}
        >
          text
        </Paragraph>
      </HStack>
      <HStack gap={8}>
        <Paragraph
          type="1"
          className="label-vertical"
          style={STYLE_ONLY_FOR_STORY.V_LABEL.MEDIUM}
        >
          initial
        </Paragraph>
        <TextButton {...restArgs} size="medium" state="initial" type="filled">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="medium" state="initial" type="stroke">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="medium" state="initial" type="text">
          {text}
        </TextButton>
      </HStack>
      <HStack gap={8}>
        <Paragraph
          type="1"
          className="label-vertical"
          style={STYLE_ONLY_FOR_STORY.V_LABEL.MEDIUM}
        >
          Pressed
        </Paragraph>
        <TextButton {...restArgs} size="medium" state="pressed" type="filled">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="medium" state="pressed" type="stroke">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="medium" state="pressed" type="text">
          {text}
        </TextButton>
      </HStack>
      <HStack gap={8}>
        <Paragraph
          type="1"
          className="label-vertical"
          style={STYLE_ONLY_FOR_STORY.V_LABEL.MEDIUM}
        >
          Disabled
        </Paragraph>
        <TextButton {...restArgs} size="medium" state="disabled" type="filled">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="medium" state="disabled" type="stroke">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="medium" state="disabled" type="text">
          {text}
        </TextButton>
      </HStack>
    </VStack>
  );
};

export const Small: Story<TextButtonProps & { text: string }> = ({
  text,
  ...restArgs
}) => {
  return (
    <VStack className="TextButton-small" gap={64}>
      <HStack className="label-horizontal" gap={8}>
        <div style={STYLE_ONLY_FOR_STORY.V_LABEL.SMALL} />
        <Paragraph
          type="1"
          className="label-horizontal__text"
          css={STYLE_ONLY_FOR_STORY.H_LABEL.SMALL}
        >
          filled
        </Paragraph>
        <Paragraph
          type="1"
          className="label-horizontal__text"
          css={STYLE_ONLY_FOR_STORY.H_LABEL.SMALL}
        >
          stroke
        </Paragraph>
        <Paragraph
          type="1"
          className="label-horizontal__text"
          css={STYLE_ONLY_FOR_STORY.H_LABEL.SMALL}
        >
          text
        </Paragraph>
      </HStack>
      <HStack gap={8}>
        <Paragraph
          type="1"
          className="label-vertical"
          style={STYLE_ONLY_FOR_STORY.V_LABEL.SMALL}
        >
          initial
        </Paragraph>
        <TextButton {...restArgs} size="small" state="initial" type="filled">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="small" state="initial" type="stroke">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="small" state="initial" type="text">
          {text}
        </TextButton>
      </HStack>
      <HStack gap={8}>
        <Paragraph
          type="1"
          className="label-vertical"
          style={STYLE_ONLY_FOR_STORY.V_LABEL.SMALL}
        >
          Pressed
        </Paragraph>
        <TextButton {...restArgs} size="small" state="pressed" type="filled">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="small" state="pressed" type="stroke">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="small" state="pressed" type="text">
          {text}
        </TextButton>
      </HStack>
      <HStack gap={8}>
        <Paragraph
          type="1"
          className="label-vertical"
          style={STYLE_ONLY_FOR_STORY.V_LABEL.SMALL}
        >
          Disabled
        </Paragraph>
        <TextButton {...restArgs} size="small" state="disabled" type="filled">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="small" state="disabled" type="stroke">
          {text}
        </TextButton>
        <TextButton {...restArgs} size="small" state="disabled" type="text">
          {text}
        </TextButton>
      </HStack>
    </VStack>
  );
};
