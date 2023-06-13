import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { useCallback } from 'react';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const goToCheckOutHandler = useCallback(() => {
    toggleIsCartOpen();
    navigate('/checkout');
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => (
            <CartItem
              key={item.id}
              cartItem={item}
            />
          ))
        ) : (
          <EmptyMessage>Your cart is empty!</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
