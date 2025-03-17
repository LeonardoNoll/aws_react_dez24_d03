import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductFilterState {
  category: string;
  price: number;
  name: string;
}

const initialState: ProductFilterState = {
  category: "",
  price: 0,
  name: "",
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
    setNameFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setCategoryFilter, setPriceFilter, setNameFilter } =
  productFilterSlice.actions;
export default productFilterSlice.reducer;
