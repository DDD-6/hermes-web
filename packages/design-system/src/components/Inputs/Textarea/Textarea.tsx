/** @jsxImportSource @emotion/react */
import {
  forwardRef,
  TextareaHTMLAttributes,
  useState,
  ReactElement,
  Children,
  cloneElement,
  useEffect,
} from 'react';
import classNames from 'classnames';

import { HStack } from '../../Layout';
import { useClickOutside } from '../../../hooks';

import * as styles from './Textarea.style';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'css' | 'value'> {
  controlledValue?: string | number | readonly string[];
  buttons?: ReactElement[];
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      className,
      defaultValue,
      disabled,
      onChange,
      controlledValue,
      buttons = [],
      ...restProps
    },
    ref,
  ) {
    const { ref: containreRef, isOutside } = useClickOutside();
    const [isFocused, setFocused] = useState<boolean>(false);

    const isControlled = Boolean(onChange);
    const isDisabled = Boolean(disabled);
    const hasButtons = Boolean(buttons.length);

    useEffect(() => {
      setFocused(!isOutside);
    }, [isOutside]);

    return (
      <div
        ref={containreRef}
        className={classNames('hermes-textarea-container', className)}
        css={[
          styles.container,
          isFocused && styles.focused,
          isDisabled && styles.disabled,
        ]}
      >
        <textarea
          css={styles.textarea}
          ref={ref}
          {...(isControlled
            ? { value: controlledValue, onChange }
            : { defaultValue })}
          {...restProps}
        />
        {hasButtons && (
          <HStack justifyContent="flex-end" gap={16} mt={16}>
            {Children.toArray(buttons.map((button) => cloneElement(button)))}
          </HStack>
        )}
      </div>
    );
  },
);

export default Textarea;
