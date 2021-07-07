const { default: CheckoutButton } = require("../Layout/CheckoutButton");

const Order = (props) => {
  return (
    <div>
      <p className="text-5xl pb-14 py-8">My order</p>
      <CheckoutButton />
    </div>
  );
};

export default Order;
