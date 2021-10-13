/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css } from '@emotion/react';

import Text from './Text';
import { paragraphStyleMap } from './fontMaps';

export type ParagraphType = '1' | '2' | '3';

export interface ParagraphProps {
  type: ParagraphType;
  className?: string;
  children: ReactNode;
}

export default function Paragraph(props: ParagraphProps) {
  const { type, className = '', children } = props;

  const paragraphStyle = css`
    font-weight: 400;
    ${paragraphStyleMap[type]}
  `;

  return (
    <Text className={className} css={paragraphStyle} as="p">
      {children}
    </Text>
  );
}
