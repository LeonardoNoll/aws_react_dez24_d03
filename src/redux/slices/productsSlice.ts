import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

const BASE_URL = "http://localhost:3001/products";
const initialState = {
  products: [] as Product[],
  loaging: false,
  error: null as string | null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(BASE_URL);
    return (await response.json()) as Product[];
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loaging = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loaging = false;
      state.products = action.payload;
    });
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
