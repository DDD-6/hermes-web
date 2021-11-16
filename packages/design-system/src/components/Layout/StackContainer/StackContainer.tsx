/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system';
import classNames from 'classnames';

import {
  ContainerGapType,
  getContainerGapStyle,
} from '../../../utils/getContainerGapStyle';

export interface StackContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    FlexboxProps,
    SpaceProps {
  gap?: ContainerGapType;
  children: ReactNode;
}

export default function StackContainer(props: StackContainerProps) {
  const { gap, className, children, ...restProps } = props;

  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    ${gap && `gap: ${getContainerGapStyle(gap)};`}
    ${flexbox}
    ${space}
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
