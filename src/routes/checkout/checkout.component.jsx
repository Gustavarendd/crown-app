import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItems from "../../components/checkout-items.component.jsx/checkout-items.component";
import Button from "../../components/button/button.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-items-container">
        {cartItems.map((item) => (
          <CheckoutItems key={item.id} cartItem={item} />
        ))}
      </div>
      <span className="total">Total: ${cartTotal}</span>
      <Button> Place Order Now </Button>
    </div>
  );
};

export default Checkout;
