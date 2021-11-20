/** @jsxImportSource @emotion/react */
import {
  Children,
  forwardRef,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';

import DropdownItem from './DropdownItem';
import { useClickOutside } from '../../../hooks';
import { colors } from '../../../styles';

import * as styles from './Dropdown.style';

export interface DropdownOption {
  id: string;
  name: string;
  checked: boolean;
}

export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'> {
  type: 'single' | 'multiple';
  options: DropdownOption[];
  display: ReactNode | null;
  onOptionClick: (selectedOptions: DropdownOption[]) => void;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(function Dropdown(
  {
    type = 'multiple',
    options = [],
    display,
    placeholder,
    className,
    onClick,
    onOptionClick,
    ...restProps
  },
  ref,
) {
  const { ref: containreRef, isOutside } = useClickOutside();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [dropdownHeight, setDropdownHeight] = useState<number>(50);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMultiple = type === 'multiple';

  // forwarded ref와 내부 dropdownRef를 맵핑
  useImperativeHandle(ref, () => dropdownRef.current as HTMLDivElement);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    setOpen(!isOpen);
  };

  const handleOptionClick = (newOption: DropdownOption) => {
    const newOptions = options.map((option) => {
      if (option.id === newOption.id) {
        return newOption;
      }

      return option;
    });

    onOptionClick(newOptions);
  };

  useEffect(() => {
    if (dropdownRef.current) {
      const { height } = dropdownRef.current.getBoundingClientRect();

      if (height !== dropdownHeight) {
        setDropdownHeight(height);
      }
    }
  }, [dropdownHeight, display]);

  useEffect(() => {
    if (isOutside && isOpen) {
      setOpen(false);
    }
  }, [isOutside, isOpen]);

  return (
    <div
      ref={containreRef}
      css={styles.container}
      className={classNames('hermes-dropdown-container', className)}
    >
      <div
        className="hermes-dropdown-display"
        css={[styles.display, !display && styles.placeholder]}
        ref={dropdownRef}
        onClick={handleClick}
        {...restProps}
      >
        {display || placeholder}
        <UilAngleDown css={styles.icon} size={24} color={colors.grey4} />
      </div>
      {isOpen && options.length && (
        <div
          className="hermes-dropdown-options"
          css={styles.optionContainer(dropdownHeight)}
        >
          {Children.toArray(
            options.map((option) => (
              <DropdownItem
                className="hermes-dropdown-option-item"
                css={styles.optionItem}
                option={option}
                hasCheckbox={isMultiple}
                onClick={handleOptionClick}
              />
            )),
          )}
        </div>
      )}
    </div>
  );
});

export default Dropdown;
