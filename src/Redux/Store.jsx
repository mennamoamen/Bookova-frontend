import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { wishReducer } from "./wishSlice";

export const store = configureStore({
  reducer: { cartReducer, wishReducer },
});

export default { store };
