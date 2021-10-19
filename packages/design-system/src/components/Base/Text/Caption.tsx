/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Text, { TextProps } from './Text';
import { captionStyleMap } from './fontMaps';

export type CaptionType = '1' | '2';

export interface CaptionProps extends Omit<TextProps, 'as'> {
  type: CaptionType;
}

export default function Caption(props: CaptionProps) {
  const { type, className = '', children, ...restProps } = props;

  const captionStyle = css`
    font-weight: 300;
    ${captionStyleMap[type]}
  `;

  return (
    <Text className={className} css={captionStyle} as="p" {...restProps}>
      {children}
    </Text>
  );
}
