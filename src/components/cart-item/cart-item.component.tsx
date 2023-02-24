import { FC } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';

import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from './cart-item.styles';

type cartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<cartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
