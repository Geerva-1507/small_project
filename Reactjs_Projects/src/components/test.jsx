import React from 'react'
import Pagination from './index';

function PaginationTest() {
    const dummyData = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
    }));
    console.log(dummyData);

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = React.useState(1);

    function handlePageChange(currentPage) {
      setCurrentPage(currentPage);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentlistOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    console.log(currentlistOfItems, indexOfFirstItem, indexOfLastItem);

  return (
    <div>
        <h1>Pagination</h1>
        <ul className="listItem">
            {currentlistOfItems.map((listItem) => (
              <li key={listItem.id}>{listItem.name}</li>
            ))}
        </ul>
      <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(dummyData.length / itemsPerPage)}
      onPagechange = {handlePageChange}
      />
    </div>
  );
}

export default PaginationTest;
