
const Pagination = ({ page, setPage, totalPages }) => {
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <div className="flex justify-center my-4">
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
      <div className="mx-2">{page}</div>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
