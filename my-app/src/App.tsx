import { useState, useEffect, useMemo, useCallback } from 'react';
import Datatable from './components/Datatable/datatable'
import { fetchIssuesWithPagination } from './hooks/useFetchIssues';
import type { PaginatedIssues } from './types/issues';
import Pagination from './components/Pagination/pagination';
import FilterSortHeader from './components/FilterSortHeader/filtersortheader';

function App() {
  const [currentPage, setCurrentPage] = useState(1); 

  const [paginatedIssue, setPaginatedIssue] = useState<PaginatedIssues>({
    issues: [],
    currentPage: 1,
    itemsPerPage: 10
  }); 

  const handlePreviousButtonClick = useCallback(() => {
    setCurrentPage((currentPage) => currentPage - 1);
  }, []);

  const handleNextButtonClick = useCallback(() => {
    setCurrentPage((currentPage) => currentPage + 1);
  }, []);

  useEffect(() => {
    const getIssues = async () => {
      const paginatedIssue: PaginatedIssues = await fetchIssuesWithPagination(currentPage, 10);
      setPaginatedIssue(paginatedIssue);
    };
    getIssues();
  }, [currentPage]);

  const paginationProps = useMemo(() => ({
    currentPage: paginatedIssue.currentPage,
    itemsPerPage: paginatedIssue.itemsPerPage,
    nextPage: handleNextButtonClick,
    prevPage: handlePreviousButtonClick,
  }), [paginatedIssue.currentPage, paginatedIssue.itemsPerPage, handleNextButtonClick, handlePreviousButtonClick]);

  return (
    <>
      <section id="center">
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Github Issues Explorer</h1>
          <FilterSortHeader />
          <Datatable issues={paginatedIssue.issues} />
          <Pagination {...paginationProps} />
          </div>
        </div>
      </section>
    </>
  )
}

export default App

