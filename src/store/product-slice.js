import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = {
  products: [],
};
const ProductSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    fetchProducts(state, action) {
      const products = action.payload;
      state.products = products;
    },
  },
});

export const ProductActions = ProductSlice.actions;

export default ProductSlice;
