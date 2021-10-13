/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css } from '@emotion/react';

import Text from './Text';
import { titleElementMap, titleStyleMap } from './fontMaps';

export type TitleType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10';

export interface TitleProps {
  type: TitleType;
  className?: string;
  children: ReactNode;
}

export default function Title(props: TitleProps) {
  const { type, className = '', children } = props;

  const as = titleElementMap[type];
  const titleStyle = css`
    font-weight: 700;
    ${titleStyleMap[type]}
  `;

  return (
    <Text className={className} css={titleStyle} as={as}>
      {children}
    </Text>
  );
}
