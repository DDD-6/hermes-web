import React from 'react';
import styled from '@emotion/styled';
import { ButtonStyleProps } from 'styled-system';
import { colors } from '../../../styles';
import Icon from '../../Base/Icon/Icon';

export type ModeType = 'card' | 'list';

export type TabProps = {
  isSelected: boolean;
  mode: ModeType;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<'button'>;

interface TabButtonProps {
  isSelected: boolean;
}

const TabButton = styled.button<ButtonStyleProps & TabButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  transition: background-color 0.1s ease-in-out;
  background-color: ${(props) =>
    props.isSelected ? colors.grey11 : colors.grey3};
  &:first-child {
    border-radius: 4px 0px 0px 4px;
  }
  &:last-child {
    border-radius: 0px 4px 4px 0px;
  }
`;

const Tab = ({ isSelected, mode, onClick }: TabProps) => {
  const iconName = mode === 'card' ? 'UilApps' : 'UilListUl';
  return (
    <TabButton isSelected={isSelected} onClick={onClick}>
      <Icon
        name={iconName}
        color={isSelected ? colors.white : colors.black}
        display="block"
      />
    </TabButton>
  );
};

export default Tab;
