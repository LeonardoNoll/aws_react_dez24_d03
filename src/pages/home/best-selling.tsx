import ProductsList from "../../components/products-list";
import { Product } from "../../types/product";

const products: Product[] = [
  {
    name: "Teste",
    image:
      "https://as2.ftcdn.net/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.webp",
    inStock: true,
    price: 100,
  },
  {
    name: "Product 2",
    image: "https://example.com/image2.jpg",
    inStock: false,
    price: 150,
  },
  {
    name: "Product 3",
    image: "https://example.com/image3.jpg",
    inStock: true,
    price: 200,
  },
  {
    name: "Product 4",
    image: "https://example.com/image4.jpg",
    inStock: true,
    price: 250,
  },
];

const BestSelling = () => {
  return (
    <section id="best-selling" className="flex flex-col items-center py-24">
      <p>SHOP NOW</p>
      <h3>Best Selling</h3>
      <ProductsList products={products} />
    </section>
  );
};

export default BestSelling;
