import { useEffect, useState } from "react";
import { Product } from "../types/product";
const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // const response = await fetch(`http://localhost:3001/products?id=${id}`);
        const response = await fetch(`http://localhost:3001/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        if (data.length > 0) {
          setProducts(data); // Acessa o primeiro elemento do array
        } else {
          throw new Error("Product not found");
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
