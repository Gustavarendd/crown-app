import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  QuantityContainer,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-items.styles.jsx";

const CheckoutItems = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(cartItem);
  const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
  const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

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
