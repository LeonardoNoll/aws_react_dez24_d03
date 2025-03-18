import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import productFilterReducer from "./slices/productFilterSlice";
import paginationReducer from "./slices/paginationSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    productFilter: productFilterReducer,
    pagination: paginationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
