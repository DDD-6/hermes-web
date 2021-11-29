/** @jsxImportSource @emotion/react */
import classNames from 'classnames';
import { forwardRef, ReactNode, useState } from 'react';

import { tooltipTail } from '../../../../src/assets/img';
import { Paragraph } from '../../Base/Text';

import * as styles from './Tooltip.style';

type TailMainPosition = 'up' | 'down' | 'left' | 'right';
type TailSubPosition = 'top' | 'bottom' | 'left' | 'right';

type TailPosition =
  | Exclude<
      `${TailMainPosition}-${TailSubPosition}`,
      | 'up-top'
      | 'up-bottom'
      | 'down-top'
      | 'down-bottom'
      | 'left-left'
      | 'left-right'
      | 'right-left'
      | 'right-right'
    >
  | 'up'
  | 'down'
  | 'left'
  | 'right';

export interface ButtonTooltipProps {
  show?: boolean;
  tipText: string;
  buttonText: string;
  tailPosition: TailPosition;
  className?: string;
  children?: ReactNode;
}

const ButtonTooltip = forwardRef<HTMLDivElement, ButtonTooltipProps>(
  function ButtonTooltip(props: ButtonTooltipProps, ref) {
    const {
      show = false,
      tipText,
      buttonText,
      tailPosition,
      className = '',
      children,
    } = props;

    const [showTooltip, setShowTooltip] = useState(show);

    return showTooltip ? (
      <div
        ref={ref}
        className={classNames(
          'hermes-popover-tooltip',
          'tooltip-wrapper',
          className,
        )}
        css={styles.tooltipWrapper}
      >
        <img
          src={tooltipTail}
          className={classNames('tooltip-pointer', tailPosition)}
          css={[styles.tail, styles.tailPosition[tailPosition]]}
        />
        <Paragraph type="1" css={styles.text}>
          {tipText}
        </Paragraph>
        <button
          type="button"
          css={styles.button}
          onClick={() => setShowTooltip(false)}
        >
          {buttonText}
        </button>
        {children}
      </div>
    ) : null;
  },
);

export default ButtonTooltip;
