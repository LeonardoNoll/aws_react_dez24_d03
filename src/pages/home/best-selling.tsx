import React from "react";
import ProductCard from "../../components/product-card";

const products = [
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
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            inStock={product.inStock}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
