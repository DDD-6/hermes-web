import { css, SerializedStyles } from '@emotion/react';

import { TitleType } from './Title';
import { ParagraphType } from './Paragraph';
import { CaptionType } from './Caption';

export const titleElementMap: Record<TitleType, string> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
  7: 'p',
  8: 'p',
  9: 'p',
  10: 'p',
};

export const titleStyleMap: Record<TitleType, SerializedStyles> = {
  1: css`
    font-size: 48px;
    line-height: 60px;
  `,
  2: css`
    font-size: 44px;
    line-height: 56px;
  `,
  3: css`
    font-size: 36px;
    line-height: 46px;
  `,
  4: css`
    font-size: 32px;
    line-height: 42px;
  `,
  5: css`
    font-size: 28px;
    line-height: 38px;
  `,
  6: css`
    font-size: 24px;
    line-height: 34px;
  `,
  7: css`
    font-size: 20px;
    line-height: 30px;
  `,
  8: css`
    font-size: 18px;
    line-height: 26px;
  `,
  9: css`
    font-size: 16px;
    line-height: 22px;
  `,
  10: css`
    font-size: 14px;
    line-height: 20px;
  `,
};

export const paragraphStyleMap: Record<ParagraphType, SerializedStyles> = {
  1: css`
    font-size: 18px;
    line-height: 30px;
  `,
  2: css`
    font-size: 16px;
    line-height: 28px;
  `,
  3: css`
    font-size: 14px;
    line-height: 24px;
  `,
};

export const captionStyleMap: Record<CaptionType, SerializedStyles> = {
  1: css`
    font-size: 14px;
    line-height: 20px;
  `,
  2: css`
    font-size: 12px;
    line-height: 18px;
  `,
};
