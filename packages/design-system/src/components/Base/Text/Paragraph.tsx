/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Text, { TextProps } from './Text';
import { paragraphStyleMap } from './fontMaps';

export type ParagraphType = '1' | '2' | '3';

export interface ParagraphProps extends Omit<TextProps, 'as'> {
  type: ParagraphType;
}

export default function Paragraph(props: ParagraphProps) {
  const { type, className = '', children, ...restProps } = props;

  const paragraphStyle = css`
    font-weight: 400;
    ${paragraphStyleMap[type]}
  `;

  return (
    <Text className={className} css={paragraphStyle} as="p" {...restProps}>
      {children}
    </Text>
  );
}
