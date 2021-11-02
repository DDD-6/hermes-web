import styled from '@emotion/styled';
import classNames from 'classnames';
import { colors } from '../../../styles';

export interface ToastProps {
  type: 'initial' | 'error';
  text: string;
  width: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  isTextCentered: boolean;
  className?: string;
}

export default function Toast({
  type,
  text = '토스트 팝업',
  width,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  isTextCentered,
  className = '',
}: ToastProps) {
  const Component = styled.div`
    color: ${colors.white};
    background-color: ${type === 'initial' ? colors.black : colors.error};
    word-break: break-all;
  `;
  return (
    <Component
      className={classNames('hermes-toast', className)}
      style={{
        width,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        textAlign: isTextCentered ? 'center' : 'initial',
      }}
    >
      {text}
    </Component>
  );
}
