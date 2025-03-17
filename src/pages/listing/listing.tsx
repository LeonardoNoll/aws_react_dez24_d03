import { useSelector } from "react-redux";
import { storeData } from "../../Data";
import ProductsList from "../../components/products-list";
import { RootState } from "../../redux/store";
import FilterSideBar from "./category-picker";
import FilterBar from "./filter-bar";

const Listing = () => {
  const { name, price, category } = useSelector(
    (store: RootState) => store.productFilter,
  );

  const filteredProducts = storeData.filter((product) => {
    const nameRegex = new RegExp(".*" + name + ".*", "i");
    if (name && !product.name.match(nameRegex)) {
      return false;
    }
    if (price > 0 && product.price > price) {
      return false;
    }
    if (category && product.category !== category) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex flex-col md:flex-row justify-start items-center md:items-start md:px-md py-24 w-screen gap-8">
      <FilterSideBar />
      <main className="flex flex-col gap-8 w-full">
        <FilterBar />
        <section className="flex flex-col gap-8 mt-8">
          <p>Showing 1-9 of {storeData.length} results.</p>
          <ProductsList products={filteredProducts} maxCols={3} />
        </section>
      </main>
    </div>
  );
};

export default Listing;
