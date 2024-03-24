import { useSelector } from "react-redux";

export default function CheckoutItems() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <ul className="checkout-items">
      {cartItems.map((item) => (
        <li className="checkout-item">
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <img src={item.thumb} />
            </div>

            <div className="checkout-item__data">
              <h3>{item.name}</h3>
              <span>#{item.id}</span>
            </div>
          </div>
          <h3>R${item.price}</h3>
        </li>
      ))}
    </ul>
  );
}
