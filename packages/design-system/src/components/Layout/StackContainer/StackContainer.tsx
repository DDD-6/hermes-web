/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { flexbox, FlexboxProps } from 'styled-system';
import classNames from 'classnames';

export interface StackContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    FlexboxProps {
  direction?: 'row' | 'column';
  className?: string;
  children: ReactNode;
}

export const containerStyle = ({
  direction,
}: {
  direction: 'row' | 'column';
}) => css`
  width: 100%;
  display: flex;
  flex-direction: ${direction};
`;

const Container = styled.div`
  ${containerStyle}
  ${flexbox}
`;

export default function StackContainer(props: StackContainerProps) {
  const { direction = 'row', className = '', children, ...restProps } = props;

  return (
    <Container
      className={classNames('hermes-stack-container', className)}
      direction={direction}
      {...restProps}
    >
      {children}
    </Container>
  );
}
