import { css } from '@emotion/react';

export const tooltipWrapper = css`
  position: relative;
  width: 272px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--grey-12);
  border: 1.2px solid var(--grey-9);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

export const text = css`
  color: var(--white);
`;

export const tail = css`
  position: absolute;
`;

export const tailPosition = {
  // * up
  'up-left': css`
    left: 12px;
    top: -8.6px;
  `,
  up: css`
    left: calc(50% - 28px / 2);
    top: -8.5px;
  `,
  'up-right': css`
    right: 12px;
    top: -8.5px;
  `,

  // * down
  'down-left': css`
    left: 12px;
    bottom: -8.5px;
    transform: rotate(180deg);
  `,
  down: css`
    left: calc(50% - 28px / 2);
    bottom: -8.5px;
    transform: rotate(180deg);
  `,
  'down-right': css`
    right: 12px;
    bottom: -8.5px;
    transform: rotate(180deg);
  `,

  // * left
  'left-top': css`
    left: -18.4px;
    top: 16px;
    transform: rotate(270deg);
  `,
  left: css`
    left: -18.4px;
    top: 22px;
    transform: rotate(270deg);
  `,
  'left-bottom': css`
    left: -18.4px;
    top: 28px;
    transform: rotate(270deg);
  `,

  // * right
  'right-top': css`
    right: -18.4px;
    top: 16px;
    transform: rotate(90deg);
  `,
  right: css`
    right: -18.4px;
    top: 22px;
    transform: rotate(90deg);
  `,
  'right-bottom': css`
    right: -18.4px;
    top: 28px;
    transform: rotate(90deg);
  `,
};
