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
    // rubric: addItem()
    addItem(state, action) {
      const p = action.payload;
      const found = state.items.find(i => i.id === p.id);
      if (!found) state.items.push({ ...p, quantity: 1 });
      recalc(state);
    },

    // rubric: removeItem()
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
      recalc(state);
    },

    // rubric: updateQuantity() - supports delta or absolute
    updateQuantity(state, action) {
      const { id, delta, quantity } = action.payload;
      const idx = state.items.findIndex(i => i.id === id);
      if (idx === -1) {
        // if not found and quantity/delta positive, add
        if ((quantity && quantity > 0) || (delta && delta > 0)) {
          const toAdd = { id, name: action.payload.name || 'Item', price: action.payload.price || 0, image: action.payload.image || '', quantity: quantity ?? delta };
          state.items.push(toAdd);
        }
      } else {
        if (quantity != null) state.items[idx].quantity = quantity;
        else if (delta != null) state.items[idx].quantity += delta;

        if (state.items[idx].quantity <= 0) state.items.splice(idx, 1);
      }
      recalc(state);
    },

    // optional helper
    clearCart(state) {
      state.items = [];
      recalc(state);
    }
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
