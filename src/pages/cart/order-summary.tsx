import { Link } from "react-router";

const OrderSummary = ({ subtotal = 0 }: { subtotal?: number }) => {
  const tax = subtotal * 0.1;
  const shipping = subtotal >= 100 || subtotal == 0 ? 0 : 10;
  return (
    <section className=" flex flex-1/3 flex-col gap-6 p-8 border border-black-100 rounded-md">
      <h5>Order Summary</h5>
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
      <button className="btn">Checkout</button>
      <Link to="/shop " className="text-center">
        Continue Shopping
      </Link>
    </section>
  );
};

export default OrderSummary;
