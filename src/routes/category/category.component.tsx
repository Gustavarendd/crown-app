import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  CategoryContainer,
  CategoryTitle,
  CategoryView,
} from './category.styles';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryView>
          <CategoryContainer>
            {products &&
              products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
          </CategoryContainer>
        </CategoryView>
      )}
    </div>
  );
};

export default Category;
