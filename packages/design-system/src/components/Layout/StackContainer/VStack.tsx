/** @jsxImportSource @emotion/react */

import StackContainer, { StackContainerProps } from './StackContainer';

export default function VStack({
  children,
  ...restProps
}: StackContainerProps) {
  return (
    <StackContainer direction="column" {...restProps}>
      {children}
    </StackContainer>
  );
}
