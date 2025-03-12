const ProductCard = ({
  image,
  name,
  inStock,
  price,
}: {
  image: string;
  name: string;
  inStock: boolean;
  price: number;
}) => {
  return (
    <div className="flex flex-col px-2 py-4 gap-2">
      <div className="flex justify-center items-center w-[240px] h-[312px] bg-white-100 p-9">
        <img src={image} />
      </div>
      <p className="text-black-900 font-medium">{name}</p>
      <div className="flex gap-6 items-center justify-start">
        <p className="border py-1 px-2 rounded-4xl border-white-200 text-black-900">
          {inStock ? "IN STOCK" : "UNAVAILABLE"}
        </p>
        <p className="text-black-600">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
