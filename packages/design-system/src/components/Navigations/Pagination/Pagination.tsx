import { useState } from 'react';
import Title from '../../Base/Text/Title';
import PageBar from './PageBar';

export interface PaginationProps {
  contentsPerPage?: number;
  totalCount?: number;
  siblingCount?: number;
}

export default function Pagination({
  contentsPerPage = 10,
  totalCount = 40,
  siblingCount = 2,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <>
      <Title type="4">현재 페이지 : {currentPage}</Title>
      <div>총 게시글 수 : {totalCount}</div>
      <div>페이지 당 게시글 수: {contentsPerPage}</div>
      <div>버튼 개수 많을 때 양 옆 버튼 수: {siblingCount}</div>
      <PageBar
        className="hermes-pagination"
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        pageSize={contentsPerPage}
        totalCount={totalCount}
        siblingCount={siblingCount}
      />
    </>
  );
}
