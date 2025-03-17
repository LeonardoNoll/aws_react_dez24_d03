export type Product = {
  name: string;
  image: string;
  onStock: number;
  category: "Perfume" | "Trousers" | "Shoes" | "Handbag" | "Hat" | "Thermos";
  price: number;
};
