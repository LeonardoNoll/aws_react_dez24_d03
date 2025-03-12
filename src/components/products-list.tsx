import { Product } from "../types/product";
import ProductCard from "./product-card";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
