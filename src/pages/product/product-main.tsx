import { useEffect, useState } from "react";
import Share from "../../components/icons/share";
import Star from "../../components/icons/star";
import Badge from "../../components/ui/badge";
import { Product } from "../../types/product";

const ProductMain = ({ product }: { product: Product }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  return (
    <section className="flex flex-col md:flex-row gap-12 md:px-md  py-24">
      <div id="image-carousel" className="flex-1/2 bg-white-100">
        <img src={product.image[0]} alt={product.name} />
      </div>
      <div id="product-info" className="flex-1/2 flex flex-col gap-4">
        <div id="title-share" className="flex justify-between items-center">
          <h3 className="text-black-900">{product.name}</h3>
          <Share />
        </div>
        <div id="reviews-stock" className="flex  items-center gap-4">
          <div className="flex w-fit border py-1 px-2 rounded-4xl justify-center border-white-200 bg-white-200 text-black-900">
            <Star />
            <p>
              {product.rating.toFixed(2)} ⎯ {product.reviews} reviews
            </p>
          </div>
          <Badge>{product.onStock > 0 ? "IN STOCK" : "NO STOCK"} </Badge>
        </div>
        <p id="price">${product.price.toFixed(2)}</p>
        {product.onStock > 0 && (
          <>
            <div id="color-selection">
              <p>AVAILABLE COLORS</p>
              {Array.from(product.colors).map((color) => (
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center cursor-pointer"
                    htmlFor={color}
                  >
                    <input
                      name="color"
                      type="radio"
                      className={`peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300  transition-all checked:bg-red-500`}
                      value={color}
                      id={color}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                    />
                    <span
                      className={`absolute w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 checked:bg-red-500`}
                    />
                  </label>
                </div>
              ))}
            </div>
            <div id="size-selection">
              <p>AVAILABLE SIZES</p>
              <div className="flex gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={
                      "border border-black-100 min-w-10 h-10 text-center rounded-md p-2" +
                      (selectedSize === size ? " border-black-900" : "")
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div id="quantity-selection">
              <p>QUANTITY</p>
              <div className="flex w-40 justify-evenly items-center">
                <button
                  onClick={() => setSelectedQuantity(selectedQuantity - 1)}
                >
                  -
                </button>
                <p>{selectedQuantity}</p>
                <button
                  onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button id="add-to-cart" className="btn">
              Add to cart
            </button>
            <p>— Free shipping on orders $100+</p>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductMain;
