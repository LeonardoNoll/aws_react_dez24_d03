import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  editProductOrder,
  removeProductOrder,
} from "../../redux/slices/cartSlice";
import Circle from "../../components/icons/circle";
import Close from "../../components/icons/close";
import OrderSummary from "./order-summary";

const Cart = () => {
  const cart = useSelector((store: RootState) => store.cart.productOrders);
  const subtotal = cart.reduce((acc: number, productOrder) => {
    return acc + productOrder.product.price * productOrder.quantity;
  }, 0);

  const dispatch = useDispatch();
  return (
    <main className="flex flex-col md:flex-row py-24 md:px-md  gap-12">
      <section className="flex-1/2">
        <h5 className="pb-4 border-b-1 border-b-white-200">Your cart</h5>
        <ul className="flex flex-col gap-8 py-8">
          {cart.map((productOrder) => (
            <li
              key={productOrder.id}
              className="flex w-full justify-between items-center"
            >
              <div className="flex gap-4">
                <div className=" flex size-20 bg-white-100 px-2.5 rounded-lg justify-center items-center">
                  <img
                    src={productOrder.product.image[0]}
                    alt={productOrder.product.name}
                    className="size-auto"
                  />
                </div>
                <div>
                  <p className="text-black-900">{productOrder.product.name}</p>
                  <div className="flex gap-2 items-center align-middle ">
                    <p className="text-xs">Color:</p>
                    <Circle />
                    <p className="text-xs"> —</p>
                    <p className="text-xs">Size: {productOrder.selectedSize}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-black-900">${productOrder.product.price}</p>
                <div className="flex  justify-evenly items-center border border-black-100 rounded-md h-10 w-[100px]">
                  {/* TODO: - and + should be svgs */}
                  <button
                    onClick={() => {
                      dispatch(
                        editProductOrder({
                          ...productOrder,
                          quantity: productOrder.quantity - 1,
                        }),
                      );
                    }}
                  >
                    -
                  </button>
                  <p>{productOrder.quantity}</p>
                  <button
                    onClick={() => {
                      dispatch(
                        editProductOrder({
                          ...productOrder,
                          quantity: productOrder.quantity + 1,
                        }),
                      );
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeProductOrder(productOrder.id))}
                  className="flex items-center justify-center size-10 bg-white-100"
                >
                  <Close />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <OrderSummary subtotal={subtotal} />
    </main>
  );
};

export default Cart;
