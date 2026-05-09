import './pagination.css';
type PaginationProps = {
  currentPage: number,
  itemsPerPage: number,
  nextPage: () => void,
  prevPage: () => void,
};

export default function Pagination({ currentPage, itemsPerPage, nextPage, prevPage }: PaginationProps) {
  return (
    <div>
      <div className="pagination-container">
        <button className="prev-button" onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} </span>
        <button className="next-button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};
