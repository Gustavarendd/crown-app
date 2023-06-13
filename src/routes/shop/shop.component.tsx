import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { ProductsContainer } from './shop.styles';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <ProductsContainer>
      <Routes>
        <Route
          index
          element={<CategoriesPreview />}
        />
        <Route
          path=":category"
          element={<Category />}
        />
      </Routes>
    </ProductsContainer>
  );
};

export default Shop;
