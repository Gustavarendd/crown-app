import { useSelector } from 'react-redux';
import {
  selectCartTotal,
  selectCartItems,
} from '../../store/cart/cart.selector';

import CheckoutItems from '../../components/checkout-items/checkout-items.component';
import Button from '../../components/button/button.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckoutItemsContainer,
  Total,
} from './checkout.styles.jsx';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
        {cartItems.map(item => (
          <CheckoutItems key={item.id} cartItem={item} />
        ))}
      </CheckoutItemsContainer>
      <Total>Total: ${cartTotal}</Total>
      <Button> Place Order Now </Button>
    </CheckoutContainer>
  );
};

export default Checkout;
