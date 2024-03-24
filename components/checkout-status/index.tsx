type CheckoutStatusProps = {
  step: string;
};

export default function CheckoutStatus({ step }: CheckoutStatusProps) {
  return (
    <div className="checkout-status">
      <ul className="checkout-steps">
        <li className={`${step === "cart" ? "active" : "done"}`}>
          <i className="icon-cart"></i>
        </li>
        <li className={`${step === "checkout" ? "active" : "done"}`}>
          <i className="icon-delivery"></i>
        </li>
      </ul>
    </div>
  );
};