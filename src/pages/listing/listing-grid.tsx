import { useSelector } from "react-redux";
import Pagination from "../../components/pagination";
import ProductsList from "../../components/products-list";
import { RootState } from "../../redux/store";

const ListingGrid = () => {
  const products = useSelector((store: RootState) => store.products.products);
  const { name, price, category } = useSelector(
    (store: RootState) => store.productFilter,
  );
  const filteredProducts = products.filter((product) => {
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
    <section className="flex flex-col gap-8 mt-8">
      <p>Showing of {products.length} results.</p>
      <ProductsList products={filteredProducts} maxCols={3} />
      <Pagination />
    </section>
  );
};

export default ListingGrid;
