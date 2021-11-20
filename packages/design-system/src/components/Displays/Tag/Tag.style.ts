import { css } from '@emotion/react';

export const container = css`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--primary);
  padding: 4px 10px;
  border-radius: 6px;
`;

export const text = css`
  width: 116px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const closeButton = css`
  margin-left: 6px;
`;
