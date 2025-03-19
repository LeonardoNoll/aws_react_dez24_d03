import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryFilter,
  setPriceFilter,
} from "../../redux/slices/productFilterSlice";

const FilterSideBar = () => {
  const dispatch = useDispatch();
  const price = useSelector((store: RootState) => store.productFilter.price);
  const products = useSelector((store: RootState) => store.products.products);
  const categories = new Set(products.map((product) => product.category));
  const maxPrice = Math.max(...products.map((product) => product.price));

  return (
    <aside className="flex flex-col border border-black-100 rounded-md pt-6 pr-3 pb-4 pl-4 gap-10">
      <div>
        <p className="text-black-900 font-medium">Categories</p>

        {Array.from(categories.values()).map((category) => (
          <div
            key={category}
            className="border-b border-black-100 p-4 space-x-2"
          >
            <input
              type="radio"
              id={category}
              name="category"
              value={category}
              onChange={(e) => {
                dispatch(setCategoryFilter(e.target.value));
              }}
            />
            <label htmlFor={category} className="text-black-600 body-regular">
              {category}
            </label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="price" className="body-medium text-black-900">
          Price
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={0}
          max={maxPrice}
          value={price}
          step={1}
          onChange={(e) => dispatch(setPriceFilter(Number(e.target.value)))}
        />
      </div>
    </aside>
  );
};

export default FilterSideBar;
