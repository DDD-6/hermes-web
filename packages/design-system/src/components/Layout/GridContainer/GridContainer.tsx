/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { grid, GridProps, space, SpaceProps } from 'styled-system';
import classNames from 'classnames';

import {
  ContainerGapType,
  getContainerGapStyle,
} from '../../../utils/getContainerGapStyle';

export interface GridContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    Omit<GridProps, 'gridGap'>,
    SpaceProps {
  gap?: ContainerGapType;
  children: ReactNode;
}

export default function GridContainer(props: GridContainerProps) {
  const { gap, className, children, ...restProps } = props;

  const Container = styled.div`
    display: grid;
    ${gap && `gap: ${getContainerGapStyle(gap)};`}
    ${grid}
    ${space}
  `;

  return (
    <Container
      className={classNames('hermes-grid-container', className)}
      {...restProps}
    >
      {children}
    </Container>
  );
}
