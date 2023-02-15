import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import Button from "../../components/button/button.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckoutItemsContainer,
  Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      <CheckoutItemsContainer>
        {cartItems.map((item) => (
          <CheckoutItems key={item.id} cartItem={item} />
        ))}
      </CheckoutItemsContainer>
      <Total>Total: ${cartTotal}</Total>
      <Button> Place Order Now </Button>
    </CheckoutContainer>
  );
};

export default Checkout;
