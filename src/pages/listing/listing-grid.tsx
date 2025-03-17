import React from "react";
import ProductsList from "../../components/products-list";
import { storeData } from "../../Data";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ListingGrid = () => {
  const { name, price, category } = useSelector(
    (store: RootState) => store.productFilter,
  );
  const filteredProducts = storeData.filter((product) => {
    const nameRegex = new RegExp(".*" + name + ".*", "i");
    if (name && !product.name.match(nameRegex)) {
      return false;
    }
    if (price > 0 && product.price > price) {
      return false;
    }
    if (category && product.category !== category) {
      return false;
    }
    return true;
  });

  return (
    <section className="flex flex-col gap-8 mt-8">
      <p>Showing 1-9 of {storeData.length} results.</p>
      <ProductsList products={filteredProducts} maxCols={3} />
    </section>
  );
};

export default ListingGrid;
