/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Text, { TextProps } from './Text';
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

export interface TitleProps extends Omit<TextProps, 'as'> {
  type: TitleType;
}

export default function Title(props: TitleProps) {
  const { type, className = '', children, ...restProps } = props;

  const as = titleElementMap[type];
  const titleStyle = css`
    font-weight: 700;
    ${titleStyleMap[type]}
  `;

  return (
    <Text className={className} css={titleStyle} as={as} {...restProps}>
      {children}
    </Text>
  );
}
