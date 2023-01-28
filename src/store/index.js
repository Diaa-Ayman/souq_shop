import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth-slice';
import CartSlice from './cart-slice';
import ProductSlice from './product-slice';
const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    auth: AuthSlice.reducer,
    products: ProductSlice.reducer,
  },
});
export default store;
