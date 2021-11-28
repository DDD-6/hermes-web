import { css } from '@emotion/react';

import { titleStyleMap } from '../../../components/Base/Text/fontMaps';

export const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const buttonCommon = css`
  border-radius: 5px;
`;

// * size : 'large' | 'medium' | 'small'
export const large = css`
  width: 480px;
  height: 64px;
  ${titleStyleMap['8']};
`;
export const medium = css`
  width: 200px;
  height: 56px;
  ${titleStyleMap['8']};
`;
export const small = css`
  width: 96px;
  height: 40px;
  ${titleStyleMap['9']};
`;

// * state : 'initial' | 'pressed' | 'disabled'
// * type : 'filled' | 'stroke' | 'text';
export const initialfilled = css`
  color: var(--white);
  background-color: var(--grey-12);
`;
export const pressedfilled = css`
  color: var(--white);
  background-color: var(--black);
`;
export const disabledfilled = css`
  color: var(--white);
  background-color: var(--grey-3);
`;

export const initialstroke = css`
  color: var(--grey-12);
  border: 2px solid var(--grey-12);
`;
export const pressedstroke = css`
  color: var(--black);
  border: 2px solid var(--black);
`;
export const disabledstroke = css`
  color: var(--grey-3);
  border: 2px solid var(--grey-3);
`;

export const initialtext = css`
  color: var(--grey-12);
`;
export const pressedtext = css`
  color: var(--black);
`;
export const disabledtext = css`
  color: var(--grey-3);
`;
