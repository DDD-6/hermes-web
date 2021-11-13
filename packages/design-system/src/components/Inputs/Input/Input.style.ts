import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const label = css`
  color: var(--black);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 10px;
`;

export const input = css`
  color: var(--black);
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  letter-spacing: -0.6px;
  background-color: transparent;
  padding: 10px 14px;
  border: 1px solid var(--grey-4);
  border-radius: 8px;

  &::placeholder {
    color: var(--grey-4);
  }
`;

export const focused = css`
  border: 1px solid var(--black);
`;

export const disabled = css`
  color: var(--grey-5);
  background-color: var(--grey-2);
  border: 1px solid var(--grey-2);
`;

export const errorMessage = css`
  color: var(--grey-8);
  margin-top: 6px;
`;
