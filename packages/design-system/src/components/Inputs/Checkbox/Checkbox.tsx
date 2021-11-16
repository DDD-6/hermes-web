/** @jsxImportSource @emotion/react */
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';

import { colors } from '../../../styles';

import * as styles from './Checkbox.style';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'css' | 'checked'> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    id,
    label,
    className,
    defaultChecked = false,
    disabled = false,
    onChange,
    ...restProps
  },
  ref,
) {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setChecked(e.target.checked);
  };

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <div
      css={styles.container}
      className={classNames('hermes-checkbox-container', className)}
    >
      <div
        css={[
          styles.checkbox,
          checked && styles.checked,
          disabled && styles.disabled(checked),
        ]}
      >
        <UilCheck css={styles.icon} size={18} color={colors.white} />
        <input
          css={styles.input}
          type="checkbox"
          id={id}
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          {...restProps}
        />
      </div>
      {Boolean(label) && (
        <label
          css={[styles.label, disabled && styles.disabledLabel]}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
});

export default Checkbox;
