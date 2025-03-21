import { useUser } from "@clerk/clerk-react";
import { MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { BeatLoader } from "react-spinners";
import { RootState } from "../../redux/store";

const CheckOutSummary = ({
  checkOut,
}: {
  checkOut: MouseEventHandler<HTMLButtonElement>;
}) => {
  const cart = useSelector((store: RootState) => store.cart.productOrders);
  const subtotal = cart.reduce((acc: number, productOrder) => {
    return acc + productOrder.product.price * productOrder.quantity;
  }, 0);
  const { isLoaded } = useUser();

  const tax = subtotal * 0.1;
  const shipping = subtotal >= 100 || subtotal == 0 ? 0 : 10;

  if (!isLoaded) return <BeatLoader />;
  return (
    <section className=" flex flex-1/3 flex-col gap-6 p-8 border border-black-100 rounded-md">
      <h5>Your Order</h5>
      <Link
        to="/cart"
        className="text-center rounded-md w-fit self-end py-3 px-6 border border-black-100"
      >
        Edit Cart
      </Link>
      <span className="order-field">
        <p>Subtotal:</p>
        <p className="text-black-900">$ {subtotal.toFixed(2)}</p>
      </span>
      <span className="order-field">
        <p>Shipping:</p>
        <p className="text-black-900">
          {shipping > 0 ? "$ " + shipping.toFixed(2) : "Free"}
        </p>
      </span>
      <span className="order-field">
        <p>Tax:</p>
        <p className="text-black-900">$ {tax.toFixed(2)}</p>
      </span>
      <span className="order-field pt-6 border-t border-black-100">
        <p>Total:</p>
        <p className="text-black-900">
          $ {(subtotal + shipping + tax).toFixed(2)}
        </p>
      </span>
      <button onClick={checkOut}></button>
    </section>
  );
};

export default CheckOutSummary;
