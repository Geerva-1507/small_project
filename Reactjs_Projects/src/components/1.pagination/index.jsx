
function Pagination({ currentPage, totalPages = 10, onPagemove }) {
  function generateNoOfPages() {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  return (
    <div className="pagination">
      <button
        onClick={() => onPagemove(currentPage - 1)}
        className="pagination-btn"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {generateNoOfPages().map((pageNo) => (
        <button
          className={`pagination-btn ${currentPage === pageNo ? "active" : ""}`}
          key={pageNo}
          onClick={() => onPagemove(pageNo)}
        >
          {pageNo}
        </button>
      ))}
      <button
        onClick={() => onPagemove(currentPage + 1)}
        className="pagination-btn"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
