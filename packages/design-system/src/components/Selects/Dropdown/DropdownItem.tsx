/** @jsxImportSource @emotion/react */
import { ChangeEvent } from 'react';

import { DropdownOption } from './Dropdown';
import { Checkbox } from '../../Inputs';
import { Paragraph } from '../../Base';

interface Props {
  option: DropdownOption;
  hasCheckbox: boolean;
  className?: string;
  onClick: (option: DropdownOption) => void;
}

export default function DropdownItem({
  option,
  hasCheckbox,
  className = '',
  onClick,
}: Props) {
  const { id, name, checked } = option;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onClick({
      ...option,
      checked: e.target.checked,
    });
  };

  const handleClick = () => {
    onClick({
      ...option,
      checked: true,
    });
  };

  return hasCheckbox ? (
    <Checkbox
      className={className}
      id={id}
      label={name}
      defaultChecked={checked}
      onChange={handleChange}
    />
  ) : (
    <div className={className}>
      <Paragraph type="2" onClick={handleClick}>
        {name}
      </Paragraph>
    </div>
  );
}
