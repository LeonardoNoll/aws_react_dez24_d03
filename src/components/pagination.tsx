import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/slices/paginationSlice.ts";
import { RootState } from "../redux/store";

const Pagination = () => {
  const dispatch = useDispatch();
  const productsPerPage = 9;
  const products = useSelector((store: RootState) => store.products.products);
  const maxPage = Math.ceil(products.length / productsPerPage);
  const pages = [];
  for (let i = 1; i <= maxPage; i++) {
    pages.push(i);
  }
  const { currentPage, totalPages } = useSelector(
    (store: RootState) => store.pagination,
  );

  return (
    <div className="flex justify-center gap-4 mt-8 border border-black-100 rounded-md  w-fit mx-auto">
      <div className="pagination-btn">{"<"}</div>
      {pages.map((page) => (
        <div
          key={page}
          onClick={() => dispatch(setCurrentPage(page))}
          className={`pagination-btn ${
            currentPage === page ? "bg-black-100 text-white" : ""
          }`}
        >
          {page}
        </div>
      ))}
      <div className="pagination-btn">{">"}</div>
    </div>
  );
};

export default Pagination;
