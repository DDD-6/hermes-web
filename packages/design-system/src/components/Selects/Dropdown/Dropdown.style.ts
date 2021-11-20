import { css } from '@emotion/react';

export const container = css`
  position: relative;
  width: 100%;
`;

export const display = css`
  position: relative;
  width: 100%;
  padding: 10px 72px 10px 14px;
  border-radius: 8px;
  border: 1px solid var(--grey-3);
`;

export const placeholder = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.6px;
  color: var(--grey-4);
`;

export const icon = css`
  position: absolute;
  top: calc(50% - 12px);
  right: 14px;
`;

export const optionContainer = (dropdownHeight: number) => css`
  position: absolute;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--grey-3);
  top: ${dropdownHeight - 1}px;
  left: 0;
`;

export const optionItem = css`
  :not(:last-child) {
    padding-bottom: 6px;
    border-bottom: 1px solid var(--grey-3);
    margin-bottom: 6px;
  }

  .hermes-checkbox-label {
    width: 100%;
  }
`;
