/** @jsxImportSource @emotion/react */
import { SVGAttributes } from 'react';
import classNames from 'classnames';
import * as Unicons from '@iconscout/react-unicons';

import { colors } from '../../../styles';

function clearDashAndUpper(text: string) {
  return text.replace(/-/, '').toUpperCase();
}

function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearDashAndUpper);
}

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'css'> {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export default function Icon(props: IconProps) {
  const {
    name,
    size = 24,
    color = colors.black,
    className = '',
    ...restProps
  } = props;

  const IconComponent = Unicons[toPascalCase(name)] ?? Unicons.UilBug;

  return (
    <IconComponent
      className={classNames('hermes-icon', className)}
      size={size}
      color={color}
      {...restProps}
    />
  );
}
