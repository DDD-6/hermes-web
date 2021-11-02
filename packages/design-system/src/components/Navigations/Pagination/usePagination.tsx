import { useMemo } from 'react';

export const TILDE = '~';

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export default function usePagination({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}): (string | number)[] {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );

    const needLeftTilde = leftSiblingIndex > 2;
    const needRightTilde = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!needLeftTilde && needRightTilde) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, TILDE, totalPageCount];
    }

    if (needLeftTilde && !needRightTilde) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      );
      return [firstPageIndex, TILDE, ...rightRange];
    }

    if (needLeftTilde && needRightTilde) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, TILDE, ...middleRange, TILDE, lastPageIndex];
    }
    return undefined;
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange || [];
}
