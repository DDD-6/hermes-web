import { css } from '@emotion/react';

export const container = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--black);
  padding: 14px 18px;
  border: 1px solid var(--grey-4);
  border-radius: 8px;
`;

export const focused = css`
  border: 1px solid var(--black);
`;

export const disabled = css`
  color: var(--grey-5);
  background-color: var(--grey-2);
  border: 1px solid var(--grey-2);

  & > textarea {
    color: var(--grey-5);
  }
`;

export const textarea = css`
  width: 100%;
  min-height: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.6px;
  padding: 0;
  outline: none;
  border: none;
  background: transparent;

  &::placeholder {
    color: var(--grey-4);
  }
`;

export const buttonContainer = css`
  & > *:not(:last-of-type) {
    margin-right: 16px;
  }
`;
