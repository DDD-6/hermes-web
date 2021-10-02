/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { flexbox, FlexboxProps } from 'styled-system';
import classNames from 'classnames';

import * as styles from './HStack.style';

export interface HStackProps extends PropsWithChildren<FlexboxProps> {
  className?: string;
}

const Container = styled.div`
  ${flexbox}
`;

export default function HStack(props: HStackProps) {
  const { children, className, ...restProps } = props;

  return (
    <Container
      className={classNames('hermes-hstack', className)}
      css={styles.container}
      {...restProps}
    >
      {children}
    </Container>
  );
}
