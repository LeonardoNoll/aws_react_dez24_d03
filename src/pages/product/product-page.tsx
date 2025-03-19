import { useParams } from "react-router";
import More from "../../components/icons/more";
import useFetchProduct from "../../hooks/useFetchProduct";
import ProductMain from "./product-main";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import ProductsList from "../../components/products-list";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useFetchProduct(id);
  const products = useSelector((store: RootState) => store.products.products);
  const validProducts = products.filter(
    (p) => p.category === product?.category && p.id !== product?.id,
  );

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
      <section className=" gap-12 md:px-md py-24">
        <div>
          <h3>You might also like</h3>
          <p>SIMILAR PRODUCTS</p>
        </div>
        <ProductsList products={validProducts} lastIndex={4} />
      </section>
    </>
  );
};
export default ProductPage;
