import { createSlice } from "@reduxjs/toolkit";
const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const cartitem = state.cart.find((item)=>item.id===action.payload.id)
      console.log(cartitem);
      if (cartitem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : ""
        );
        return;
      }
      state.cart.push(action.payload);
    },
    removefromcart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addtocart, removefromcart } = cart.actions;
export default cart.reducer;
