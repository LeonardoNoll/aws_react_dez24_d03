import React from "react";
import ProductMain from "./product-main";
import { useParams } from "react-router";
import useFetchProduct from "../../hooks/useFetchProduct";
import More from "../../components/icons/more";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useFetchProduct(id);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <ProductMain product={product} />
      <section
        id="product-details"
        className="flex justify-between items-center md:px-md py-24"
      >
        <div className="flex bg-white-100 items-center gap-4 rounded-md px-4 py-1 w-1/5">
          <More />
          <p className="text-black-900">Details</p>
        </div>
        <div className="flex w-3/5 flex-col gap-4 min-h-80">
          <h5 className="font-semibold text-black-900">Details</h5>
          <p>{product.description}</p>
        </div>
      </section>
    </>
  );
};
export default ProductPage;
