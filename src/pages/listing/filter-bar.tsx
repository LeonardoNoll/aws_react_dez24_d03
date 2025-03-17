import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/icons/search";
import Badge from "../../components/ui/badge";
import {
  setCategoryFilter,
  setNameFilter,
  setPriceFilter,
} from "../../redux/slices/productFilterSlice";
import { RootState } from "../../redux/store";

const FilterBar = () => {
  const dispatch = useDispatch();

  const { name, price, category } = useSelector(
    (store: RootState) => store.productFilter,
  );
  return (
    <section
      id="filter-control"
      className="h-20 w-max flex flex-row items-center justify-between px-8"
    >
      <div id="applied-fillters" className="flex flex-col gap-4">
        <p>Applied Filters:</p>
        <div className="flex gap-2">
          {category && (
            <Badge onClick={() => dispatch(setCategoryFilter(""))}>
              {category}
            </Badge>
          )}
          {price > 0 && (
            <Badge onClick={() => dispatch(setPriceFilter(0))}>{price}</Badge>
          )}
          {name && (
            <Badge onClick={() => dispatch(setNameFilter(""))}>{name}</Badge>
          )}
        </div>
      </div>
      <div
        id="name-search"
        className="flex items-center gap-2 border border-black-100 rounded-md p-2"
      >
        <Search />
        <input
          type="text"
          placeholder="Search"
          className="border-none focus:outline-none"
          value={name}
          onChange={(e) =>
            dispatch(setNameFilter(e.target.value.toLowerCase()))
          }
        />
      </div>
    </section>
  );
};

export default FilterBar;
