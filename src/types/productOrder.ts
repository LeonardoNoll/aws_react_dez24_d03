import { Product } from "./product";

export type ProductOrder = {
  id: number;
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
};
