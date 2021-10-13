/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { flexbox, FlexboxProps } from 'styled-system';
import classNames from 'classnames';

export interface StackContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    FlexboxProps {
  className?: string;
  children: ReactNode;
}

export const containerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  ${containerStyle}
  ${flexbox}
`;

export default function StackContainer(props: StackContainerProps) {
  const { className = '', children, ...restProps } = props;

  return (
    <Container
      className={classNames('hermes-stack-container', className)}
      {...restProps}
    >
      {children}
    </Container>
  );
}
