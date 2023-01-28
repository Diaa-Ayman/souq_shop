import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
};
const CartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.totalQuantity = state.totalQuantity + newItem.amount;

      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          amount: newItem.amount,
          desc: newItem.desc,
          countInStock: newItem.countInStock,
          image: newItem.image,
          totalPrice: newItem.amount * newItem.price,
        });
      } else {
        exisitingItem.amount++;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice + exisitingItem.price;
      }
    },
    removeFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      if (exisitingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.amount--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
    },
    clearCart(state) {
      state = initialCartState;
    },
    removeCartItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
