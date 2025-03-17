import { useSelector } from "react-redux";
import ProductsList from "../../components/products-list";
import Badge from "../../components/ui/badge";
import { RootState } from "../../redux/store";

const OnOffer = () => {
  const products = useSelector((store: RootState) => store.products.products);
  const validProducts = products.filter((product) => product.onStock > 0);
  return (
    <section className="flex flex-col items-center py-24 md:px-md">
      <Badge>On Offer</Badge>
      <ProductsList products={validProducts.slice(0, 4)} />
    </section>
  );
};

export default OnOffer;
