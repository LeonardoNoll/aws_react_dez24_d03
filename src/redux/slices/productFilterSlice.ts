import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductFilterState {
  category: string;
  price: number;
}

const initialState: ProductFilterState = {
  category: "",
  price: 0,
};

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setPriceFilter: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

export const { setCategoryFilter, setPriceFilter } = productFilterSlice.actions;
export default productFilterSlice.reducer;
