import React, { useState } from 'react'
import Pagination from './index';
import "./pagination.css";

function PaginationTest() {
    const dummyData = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
    }));

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    function handlePageChange(currentPage) {
      setCurrentPage(currentPage);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentlistOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div>
        <h1>Pagination</h1>
        <ul className='list-items'>
            {currentlistOfItems.map((listItem) => (
              <li key={listItem.id}>{listItem.name}</li>
            ))}
        </ul>
      <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(dummyData.length / itemsPerPage)}
      onPagemove = {handlePageChange}
      />
    </div>
  );
}

export default PaginationTest;
