/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { grid, GridProps } from 'styled-system';
import classNames from 'classnames';

export interface GridContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    GridProps {
  className?: string;
  children: ReactNode;
}

const Container = styled.div`
  display: grid;
  ${grid}
`;

export default function GridContainer(props: GridContainerProps) {
  const { className = '', children, ...restProps } = props;

  return (
    <Container
      className={classNames('hermes-grid-container', className)}
      {...restProps}
    >
      {children}
    </Container>
  );
}
