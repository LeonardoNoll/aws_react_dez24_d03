import { storeData } from "../../Data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

const initialState = {
  products: storeData,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
