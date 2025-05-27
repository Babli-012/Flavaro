import { createSlice } from "@reduxjs/toolkit";
const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const cartitem = state.cart.find((item) => item.id === action.payload.id);
      console.log(cartitem);
      if (cartitem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        return;
      }
      state.cart.push(action.payload);
    },
    removefromcart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementbyone: (state,action) => {
         state.cart =   state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
    },
     decrementbyone: (state,action) => {
         state.cart =   state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty-1}:item)
    },
  },
});
export const { addtocart, removefromcart,incrementbyone ,decrementbyone } = cart.actions;
export default cart.reducer;
