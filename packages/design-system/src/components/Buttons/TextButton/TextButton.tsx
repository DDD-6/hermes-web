/** @jsxImportSource @emotion/react */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';

import * as styles from './TextButton.style';

type ButtonSizeType = 'large' | 'medium' | 'small';
type ButtonType = 'filled' | 'stroke' | 'text';
type ButtonStateType = 'initial' | 'pressed' | 'disabled';

type ButtonVariantType = {
  type: ButtonType;
  size: ButtonSizeType;
  state: ButtonStateType;
};

export interface TextButtonProps {
  variant?: ButtonVariantType;
  type: ButtonType;
  size: ButtonSizeType;
  state: ButtonStateType;
  buttonColor: string;
  buttonActiveColor: string;
  className?: string;
  children: ReactNode;
}

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  (props, ref): EmotionJSX.Element => {
    const { size, state, type, className = '', children, ...restProps } = props;

    const buttonClassName = `${size}-${state}-${type}`;

    return (
      <button
        type="button"
        ref={ref}
        css={[styles.buttonCommon, styles[size], styles[state + type]]}
        className={classNames('hermes-button-text', buttonClassName, className)}
        {...restProps}
      >
        {children}
      </button>
    );
  },
);

export default TextButton;
