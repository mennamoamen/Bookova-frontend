import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      if (action.payload) {
        const cartbook = action.payload.isbn13;
        const index = state.cart ? state.cart.map((item) => item.isbn13).indexOf(cartbook) : -1;
        if (index !== -1) {
          state.cart[index].qty += 1;
        } else {
          state.cart.push(action.payload);
        }
      }
    },
    removeBook: (state, action) => {
      const remBook = state.cart.filter((item) => item.isbn13 !== action.payload);
      // console.log(item.isbn13);
      state.cart = remBook;
      console.log("hii", remBook);
    },
    incQuantity: (state, action) => {
      const incQuantity = action.payload;
      state.cart[incQuantity].qty += 1;
      const bookPrice = [...action.payload.price];
      bookPrice.shift();
      console.log(bookPrice.join(""));
    },
    decQuantity: (state, action) => {
      const decQuantity = action.payload;
      state.cart[decQuantity].qty -= 1;
      if (state.cart[decQuantity].qty < 0) {
        state.cart[decQuantity].qty = 0;
      }
      // console.log(state.cart[decQuantity].isbn13);
    },
  },
});

export const { addToCart, removeBook, incQuantity, decQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
