import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductOrder } from "../../types/productOrder";

interface carState {
  productOrders: ProductOrder[];
}

const initialState: carState = {
  productOrders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductOrders: (state, action: PayloadAction<ProductOrder[]>) => {
      state.productOrders = action.payload;
    },
    addProductOrder: (state, action: PayloadAction<ProductOrder>) => {
      state.productOrders.push(action.payload);
    },
    removeProductOrder: (state, action: PayloadAction<number>) => {
      state.productOrders = state.productOrders.filter(
        (productOrder) => productOrder.id !== action.payload,
      );
    },
    editProductOrder: (state, action: PayloadAction<ProductOrder>) => {
      const index = state.productOrders.findIndex(
        (productOrder) => productOrder.id === action.payload.id,
      );
      state.productOrders[index] = action.payload;
    },
  },
});

export const {
  setProductOrders,
  addProductOrder,
  removeProductOrder,
  editProductOrder,
} = cartSlice.actions;
export default cartSlice.reducer;
