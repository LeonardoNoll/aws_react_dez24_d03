import ProductsList from "../../components/products-list";
import Badge from "../../components/ui/badge";
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

const OnOffer = () => {
  return (
    <section className="flex flex-col items-center py-24 md:px-md">
      <Badge>On Offer</Badge>
      <ProductsList products={products} />
    </section>
  );
};

export default OnOffer;
