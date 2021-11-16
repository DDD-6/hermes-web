import { css } from '@emotion/react';

export const container = css`
  display: flex;
  align-items: center;
`;

export const toggle = css`
  position: relative;
  width: 40px;
  height: 24px;
  background-color: var(--grey-3);
  border-radius: 12px;
  transition: background-color 0.15s ease-in-out;
`;

export const checked = css`
  background-color: var(--grey-12);

  & > div {
    transform: translateX(0);
  }
`;

export const indicator = css`
  width: 20px;
  height: 20px;
  background-color: var(--white);
  border-radius: 50%;
  margin: 2px;
  transform: translateX(16px);
  transition: transform 0.15s ease-in-out;
`;

export const input = css`
  cursor: pointer;
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
