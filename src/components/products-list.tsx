import { Product } from "../types/product";
import ProductCard from "./product-card";

const ProductsList = ({
  products,
  firstIndex = 0,
  lastIndex = products.length,
  maxCols = 4,
}: {
  products: Product[];
  firstIndex?: number;
  lastIndex?: number;
  maxCols?: number;
}) => {
  return (
    <div
      className={`grid gap-8 grid-cols-1 md:grid-cols-2 ${maxCols > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
    >
      {products.slice(firstIndex, lastIndex).map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
