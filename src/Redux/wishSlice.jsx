import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishlist",
  initialState: { wishlist: [] },
  reducers: {
    addToWishList: (state, action) => {
      if (action.payload) {
        const wishbook = action.payload.isbn13;
        const index = state.wishlist ? state.wishlist.map((item) => item.isbn13).indexOf(wishbook) : -1;
        if (index !== -1) {
          const remBook = state.wishlist.filter((item) => item.isbn13 !== action.payload);
          state.wishlist = remBook;
          // console.log("hii", remBook);
        } else {
          state.wishlist.push(action.payload);
        }
      }
    },
    delBook: (state, action) => {
      const remBook = state.wishlist.filter((item) => item.isbn13 !== action.payload);
      state.wishlist = remBook;
      console.log("hii", remBook);
    },
  },
});
export const { addToWishList, delBook } = wishSlice.actions;
export const wishReducer = wishSlice.reducer;
