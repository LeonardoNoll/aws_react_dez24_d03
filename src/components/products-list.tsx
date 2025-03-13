import { Product } from "../types/product";
import ProductCard from "./product-card";

const ProductsList = ({
  products,
  firstIndex = 0,
  lastIndex = 4,
}: {
  products: Product[];
  firstIndex?: number;
  lastIndex?: number;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
      {products.slice(firstIndex, lastIndex).map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
