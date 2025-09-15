import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],         // { id, name, price, image, quantity }
  totalQuantity: 0,
  totalCost: 0,
};

const recalc = (state) => {
  state.totalQuantity = state.items.reduce((s, it) => s + it.quantity, 0);
  state.totalCost = state.items.reduce((s, it) => s + it.quantity * it.price, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload;
      const found = state.items.find(i => i.id === p.id);
      if (!found) state.items.push({ ...p, quantity: 1 });
      recalc(state);
    },
    increment(state, action) {
      const id = action.payload;
      const it = state.items.find(i => i.id === id);
      if (it) it.quantity += 1;
      recalc(state);
    },
    decrement(state, action) {
      const id = action.payload;
      const idx = state.items.findIndex(i => i.id === id);
      if (idx >= 0) {
        if (state.items[idx].quantity > 1) state.items[idx].quantity -= 1;
        else state.items.splice(idx, 1);
      }
      recalc(state);
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
      recalc(state);
    },
    clearCart(state) {
      state.items = [];
      recalc(state);
    },
  },
});

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
addItem(state, action) { ... }
removeItem(state, action) { ... }
updateQuantity(state, action) { ... }

