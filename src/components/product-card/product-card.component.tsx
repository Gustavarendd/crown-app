import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { CategoryItem } from '../../store/categories/category.types';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

type productCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<productCardProps> = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img
        src={imageUrl}
        alt={`${name}`}
      />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
