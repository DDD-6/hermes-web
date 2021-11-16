/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import classNames from 'classnames';

export interface TextProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'css'> {
  as?: string;
  children: ReactNode;
}

export default function Text(props: TextProps) {
  const { as = 'p', className, children, ...restProps } = props;

  const Component = styled(as as any)`
    letter-spacing: -0.6px;
  `;

  return (
    <Component className={classNames('hermes-text', className)} {...restProps}>
      {children}
    </Component>
  );
}
