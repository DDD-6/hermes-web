/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import { FocusEvent, forwardRef, InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';

import { Caption } from '../Base/Text';

import * as styles from './Input.style';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'css' | 'value'> {
  label?: string;
  customValue?: string | number | readonly string[];
  errorMessage?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    type = 'text',
    defaultValue,
    placeholder,
    disabled,
    onChange,
    onFocus,
    onBlur,
    label,
    customValue,
    errorMessage,
    className,
    ...restProps
  },
  ref,
) {
  const [isFocused, setFocused] = useState<boolean>(false);

  const isControlled = Boolean(onChange);
  const isDisabled = Boolean(disabled);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    onFocus?.(e);
    setFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
    setFocused(false);
  };

  return (
    <div
      className={classNames('hermes-input-container', className)}
      css={styles.container}
    >
      {label && (
        <label css={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        css={[
          styles.input,
          isFocused && styles.focused,
          isDisabled && styles.disabled,
        ]}
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...(isControlled
          ? { value: customValue, onChange }
          : { defaultValue })}
        {...restProps}
      />
      <Caption css={styles.errorMessage} type="2">
        {errorMessage}
      </Caption>
    </div>
  );
});

export default Input;
