/** @jsxImportSource @emotion/react */
import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';

import { Paragraph } from '../../Base/Text';

import { tooltipTail } from '@hermes/design-system/src/assets/img';

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

export interface TooltipProps {
  show?: boolean;
  tailPosition: TailPosition;
  className?: string;
  children?: ReactNode;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(
  props: TooltipProps,
  ref,
) {
  const { show = false, tailPosition, className = '', children } = props;

  return show ? (
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
        {children}
      </Paragraph>
    </div>
  ) : null;
});

export default Tooltip;
