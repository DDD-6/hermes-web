import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../styles';
import { VStack } from '../../../components/Layout/StackContainer';

type LabelHead = 'Up' | 'Left' | 'Right' | 'Down';
type LabelTail = 'Top' | 'Bottom' | 'Left' | 'Right';

export type TooltipsProps = {
  position:
    | Exclude<
        `${LabelHead}-${LabelTail}`,
        | 'Up-Top'
        | 'Up-Bottom'
        | 'Left-Left'
        | 'Left-Right'
        | 'Right-Left'
        | 'Right-Right'
        | 'Down-Top'
        | 'Down-Bottom'
      >
    | 'Up'
    | 'Down'
    | 'Left'
    | 'Right';
  tooltipText: string;
  buttonText: string;
  width: number;
  minHeight: number;
  backgroundColor: string;
  color: string;
} & Omit<React.ComponentProps<'div'>, 'css'>;

export default function Tooltips({
  position,
  tooltipText = 'Tooltip with border',
  buttonText = 'Button',
  width,
  minHeight,
  backgroundColor,
  color,
  ...rest
}: TooltipsProps) {
  const Component = styled.div`
    white-space: pre-line;
    line-height: 1.5;
    background-color: ${colors.grey11};
    border-radius: 10px;
    border: 1px solid ${colors.white};
    padding: 30px;
    position: relative;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  `;
  const Arrow = styled.div`
    z-index: -1;
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    background-color: ${colors.grey11};
    position: absolute;
    border: 1px solid ${colors.white};
    ${(props) => props.property};
  `;

  const TooltipText = styled.div`
    text-align: center;
    color: ${color};
  `;

  const Button = styled.button`
    color: ${color};
  `;

  let firstGap = '-6px';
  let secondGap = '15px';
  const [first, second] = position.split('-');
  let firstPosition = '';
  let secondPosition = '';
  switch (first) {
    case 'Up':
      firstPosition = `top: ${firstGap};`;
      if (!second) {
        firstPosition += 'left: 0; right: 0; margin: auto;';
      }
      break;
    case 'Left':
      firstPosition = `left: ${firstGap};`;
      if (!second) {
        firstPosition += 'top: 0; bottom: 0; margin: auto;';
      }
      break;
    case 'Down':
      firstPosition = `bottom: ${firstGap};`;
      if (!second) {
        firstPosition += 'left: 0; right: 0; margin: auto;';
      }
      break;
    case 'Right':
      firstPosition = `right: ${firstGap};`;
      if (!second) {
        firstPosition += 'top: 0; bottom: 0; margin: auto;';
      }
      break;
    default:
      break;
  }
  switch (second) {
    case 'Top':
      secondPosition = `top: ${secondGap};`;
      break;
    case 'Bottom':
      secondPosition = `bottom: ${secondGap};`;
      break;
    case 'Left':
      secondPosition = `left: ${secondGap};`;
      break;
    case 'Right':
      secondPosition = `right: ${secondGap};`;
      break;
    default:
      break;
  }

  return (
    <Component
      className={`hermes-tooltip-${position}`}
      style={{ width, minHeight, backgroundColor, color }}
      {...rest}
    >
      <Arrow property={firstPosition + secondPosition} />
      <VStack justifyContent="center" alignItems="center" gap={10}>
        <TooltipText>{tooltipText}</TooltipText>
        <Button type="button">{buttonText}</Button>
      </VStack>
    </Component>
  );
}
