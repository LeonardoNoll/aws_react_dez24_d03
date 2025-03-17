import { useState } from "react";
import { useSelector } from "react-redux";
import Badge from "../../components/ui/badge";
import { RootState } from "../../redux/store";
import FilterSideBar from "./category-picker";
const Listing = () => {
  const { productName, setProductName } = useState("");

  const categoryFilter = useSelector(
    (store: RootState) => store.productFilter.category,
  );
  const price = useSelector((store: RootState) => store.productFilter.price);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:px-md py-24">
      <FilterSideBar />
      <main>
        <div
          id="filter-control"
          className="h-20 w-full flex items-center justify-between px-8"
        >
          <div>
            <p>Applied Filters:</p>
            <div className="flex gap-2">
              {categoryFilter && <Badge>{categoryFilter}</Badge>}
              {price > 0 && <Badge>{price}</Badge>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Listing;
