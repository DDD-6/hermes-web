import styled from '@emotion/styled';
import classNames from 'classnames';
import { colors } from '../../../styles';

import Icon from '../../Base/Icon/Icon';
import usePagination, { TILDE } from './usePagination';

export interface PageBarProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}
export default function PageBar({
  onPageChange,
  totalCount,
  siblingCount = 2,
  currentPage,
  pageSize,
  className,
}: PageBarProps) {
  const paginationRange: (string | number)[] = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  const PageContainer = styled('div')`
    font-size: 24px;
    height: 24px;
    display: flex;
  `;

  type PageButtonProps = {
    isSelected: boolean;
  };

  const ArrowButton = styled('button')`
    width: ${Math.ceil(totalCount / pageSize) < 100 ? '48px' : '64px'};
    height: ${Math.ceil(totalCount / pageSize) < 100 ? '48px' : '64px'};
    background-color: ${colors.grey3};
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const PageButton = styled('button')`
    width: ${Math.ceil(totalCount / pageSize) < 100 ? '48px' : '64px'};
    height: ${Math.ceil(totalCount / pageSize) < 100 ? '48px' : '64px'};
    padding: 5px;
    border: 1px solid ${colors.grey4};
    color: ${(props: PageButtonProps) => !props.isSelected && colors.grey4};
    justify-content: center;
    align-items: center;
  `;

  const onPrev = () => {
    onPageChange(currentPage - 1);
  };

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  if (currentPage === 0 || paginationRange.length < 2) {
    return (
      <PageContainer className={classNames('hermes-pagination-container')}>
        <ArrowButton
          type="button"
          disabled={currentPage === 1}
          className={classNames('hermes-pagination-item arrow')}
          onClick={onPrev}
        >
          <Icon name="UilAngleLeftB" color={colors.grey8} display="block" />
        </ArrowButton>
        <PageButton
          type="button"
          className={classNames('hermes-pagination-item number')}
          isSelected
        >
          1
        </PageButton>
        <ArrowButton
          type="button"
          disabled={currentPage === lastPage}
          className={classNames('hermes-pagination-item arrow')}
          onClick={onNext}
        >
          <Icon name="UilAngleRightB" color={colors.grey8} display="block" />
        </ArrowButton>
      </PageContainer>
    );
  }

  return (
    <PageContainer className={classNames('hermes-pagination-container')}>
      <ArrowButton
        type="button"
        disabled={currentPage === 1}
        className={classNames('hermes-pagination-item arrow')}
        onClick={onPrev}
      >
        <Icon name="UilAngleLeftB" color={colors.grey8} display="block" />
      </ArrowButton>
      {paginationRange.map((pageNumber: string | number) => {
        if (String(pageNumber) === TILDE) {
          return (
            <PageButton
              key={TILDE}
              type="button"
              className="hermes-pagination-item dots"
              isSelected={currentPage === pageNumber}
            >
              {TILDE}
            </PageButton>
          );
        }

        return (
          <PageButton
            key={pageNumber}
            type="button"
            className={classNames('hermes-pagination-item number')}
            isSelected={pageNumber === currentPage}
            onClick={() => onPageChange(+pageNumber)}
          >
            {pageNumber}
          </PageButton>
        );
      })}
      <ArrowButton
        type="button"
        disabled={currentPage === lastPage}
        className={classNames('hermes-pagination-item arrow')}
        onClick={onNext}
      >
        <Icon name="UilAngleRightB" color={colors.grey8} display="block" />
      </ArrowButton>
    </PageContainer>
  );
}
