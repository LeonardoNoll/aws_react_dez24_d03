import { Product } from "../types/product";
import Badge from "./ui/badge";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col px-2 py-4 gap-2" key={product.name}>
      <div className="flex justify-center items-center w-[240px] h-[312px] bg-white-100 p-9">
        <img src={product.image} />
      </div>
      <p className="text-black-900 font-medium">{product.name}</p>
      <div className="flex gap-6 items-center justify-start">
        <Badge>{product.onStock > 0 ? "IN STOCK" : "NO STOCK"}</Badge>
        <p className="text-black-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
