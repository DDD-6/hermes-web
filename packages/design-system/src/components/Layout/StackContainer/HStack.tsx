/** @jsxImportSource @emotion/react */

import StackContainer, { StackContainerProps } from './StackContainer';

export default function HStack({
  children,
  ...restProps
}: StackContainerProps) {
  return <StackContainer {...restProps}>{children}</StackContainer>;
}
