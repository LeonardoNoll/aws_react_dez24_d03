import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import ProductsList from "../../components/products-list";

const BestSelling = () => {
  const products = useSelector((store: RootState) => store.products.products);
  const validProducts = products.filter((product) => product.onStock > 0);
  return (
    <section id="best-selling" className="flex flex-col items-center py-24">
      <p>SHOP NOW</p>
      <h3>Best Selling</h3>
      <ProductsList products={validProducts.slice(0, 4)} />
    </section>
  );
};

export default BestSelling;
