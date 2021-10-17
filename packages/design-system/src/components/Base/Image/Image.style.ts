import { css } from '@emotion/react';

import { getSizeValueByType, SizeValueType } from '../../../utils';

export const container = (width: SizeValueType, height: SizeValueType) => css`
  position: relative;
  width: ${getSizeValueByType(width)};
  height: ${getSizeValueByType(height)};
  overflow: hidden;
`;

export const image = css`
  position: relative;
  width: inherit;
  height: inherit;
  object-fit: cover;
`;

export const placeholder = css`
  position: absolute;
  width: inherit;
  height: inherit;
  top: 0;
  left: 0;
`;

export const isLoadComplete = css`
  display: none;
`;

export const placeholderImage = css`
  width: inherit;
  height: inherit;
  object-fit: cover;
`;
