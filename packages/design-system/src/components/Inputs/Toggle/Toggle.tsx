/** @jsxImportSource @emotion/react */
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';

import * as styles from './Toggle.style';

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'css' | 'checked'> {
  label?: string;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  { id, label, className, defaultChecked = false, onChange, ...restProps },
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
      className={classNames('hermes-toggle-container', className)}
    >
      <div css={[styles.toggle, checked && styles.checked]}>
        <div css={styles.indicator} />
        <input
          css={styles.input}
          type="checkbox"
          ref={ref}
          id={id}
          checked={checked}
          onChange={handleChange}
          {...restProps}
        />
      </div>
      {Boolean(label) && (
        <label css={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
});

export default Toggle;
