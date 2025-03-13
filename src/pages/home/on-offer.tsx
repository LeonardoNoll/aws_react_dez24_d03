import { useSelector } from "react-redux";
import ProductsList from "../../components/products-list";
import Badge from "../../components/ui/badge";
import { RootState } from "../../redux/store";

const OnOffer = () => {
  const products = useSelector((store: RootState) => store.products.products);
  return (
    <section className="flex flex-col items-center py-24 md:px-md">
      <Badge>On Offer</Badge>
      <ProductsList products={products} />
    </section>
  );
};

export default OnOffer;
