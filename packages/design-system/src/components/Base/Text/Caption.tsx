/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css } from '@emotion/react';

import Text from './Text';
import { captionStyleMap } from './fontMaps';

export type CaptionType = '1' | '2';

export interface CaptionProps {
  type: CaptionType;
  className?: string;
  children: ReactNode;
}

export default function Caption(props: CaptionProps) {
  const { type, className = '', children } = props;

  const captionStyle = css`
    font-weight: 300;
    ${captionStyleMap[type]}
  `;

  return (
    <Text className={className} css={captionStyle} as="p">
      {children}
    </Text>
  );
}
