/** @jsxImportSource @emotion/react */
import { forwardRef, HTMLAttributes, MouseEvent } from 'react';
import classNames from 'classnames';
import UilMultiply from '@iconscout/react-unicons/icons/uil-multiply';

import { Paragraph } from '../../Base';
import { colors } from '../../../styles';

import * as styles from './Tag.style';

export interface TagProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css' | 'children'> {
  isClosable?: boolean;
  children: string;
  onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Tag = forwardRef<HTMLDivElement, TagProps>(function Tag(
  { isClosable = true, className, children, onClose, ...restProps },
  ref,
) {
  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    onClose?.(e);
  };

  return (
    <div
      ref={ref}
      className={classNames('hermes-tag-container', className)}
      css={styles.container}
      {...restProps}
    >
      <Paragraph css={styles.text} type="3">
        {children}
      </Paragraph>
      {isClosable && (
        <button css={styles.closeButton} type="button" onClick={handleClose}>
          <UilMultiply size={14} color={colors.black} />
        </button>
      )}
    </div>
  );
});

export default Tag;
