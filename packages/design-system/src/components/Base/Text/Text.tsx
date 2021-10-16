/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import classNames from 'classnames';

export interface TextProps {
  as?: string;
  className?: string;
  children: ReactNode;
}

export default function Text(props: TextProps) {
  const { as = 'p', className = '', children } = props;

  const Component = styled(as as any)`
    letter-spacing: -0.6px;
  `;

  return (
    <Component className={classNames('hermes-text', className)}>
      {children}
    </Component>
  );
}
