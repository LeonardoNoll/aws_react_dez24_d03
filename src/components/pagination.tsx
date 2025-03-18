import { useSelector } from "react-redux";
import { storeData } from "../Data";
import { setCurrentPage } from "../redux/slices/paginationSlice.ts";
import { RootState } from "../redux/store";

const Pagination = () => {
  const productsPerPage = 9;
  const maxPage = Math.ceil(storeData.length / productsPerPage);
  const pages = [];
  for (let i = 1; i <= maxPage; i++) {
    pages.push(i);
  }
  const { currentPage, totalPages } = useSelector(
    (store: RootState) => store.pagination,
  );

  return (
    <div className="flex gap-1 border border-black-100 rounded-md p-2">
      <button
        className="border-r border-black-100 px-2"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-2 ${
            page === currentPage ? "bg-black-100 text-white" : ""
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="border-l border-black-100 px-2"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === maxPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
