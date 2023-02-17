import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action.js';

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  QuantityContainer,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-items.styles.jsx';

const CheckoutItems = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, price, imageUrl, quantity } = cartItem;

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));

  const removeItemFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const clearItemFromCartHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <Name>{name} </Name>

      <QuantityContainer>
        <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
        <span>{quantity}</span>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </QuantityContainer>

      <Value> ${price} </Value>

      <RemoveButton onClick={clearItemFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItems;
