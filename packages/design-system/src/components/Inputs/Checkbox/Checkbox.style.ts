import { css } from '@emotion/react';

export const container = css`
  display: flex;
  align-items: center;
`;

export const checkbox = css`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: var(--white);
  border-radius: 4px;
  border: 1px solid var(--grey-12);
`;

export const checked = css`
  background-color: var(--grey-12);
`;

export const disabled = (isChecked: boolean) => css`
  ${isChecked && `background-color: var(--grey-3);`}
  border: 1px solid var(--grey-3);
`;

export const icon = css`
  margin: 2px;
`;

export const input = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  z-index: 1;
`;

export const label = css`
  color: var(--black);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.6;
  margin-left: 8px;
`;

export const disabledLabel = css`
  color: var(--grey-4);
`;
