import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { id, name, price, image, quantity }
  totalQuantity: 0,
  totalCost: 0,
};

const recalc = (state) => {
  state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
  state.totalCost = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const p = action.payload;
      const found = state.items.find(i => i.id === p.id);
      if (!found) {
        state.items.push({ ...p, quantity: 1 });
      }
      recalc(state);
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
      recalc(state);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.quantity = quantity;
      recalc(state);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
