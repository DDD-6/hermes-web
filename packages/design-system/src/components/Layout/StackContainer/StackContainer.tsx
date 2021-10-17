/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { flexbox, FlexboxProps } from 'styled-system';
import classNames from 'classnames';

import {
  ContainerGapType,
  getContainerGapStyle,
} from '../../../utils/getContainerGapStyle';

export interface StackContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    FlexboxProps {
  gap?: ContainerGapType;
  className?: string;
  children: ReactNode;
}

export default function StackContainer(props: StackContainerProps) {
  const { gap, className = '', children, ...restProps } = props;

  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    ${gap && `gap: ${getContainerGapStyle(gap)};`}
    ${flexbox}
  `;

  return (
    <Container
      className={classNames('hermes-stack-container', className)}
      {...restProps}
    >
      {children}
    </Container>
  );
}
