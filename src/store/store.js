import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/cartSlice";
import loginSliceReducer from "./slices/loginSlice";
import ProductsReducer from "./slices/productsSlice";
import SearchReducer from "./slices/searchSlice";
import AlertSliceReducer from "./slices/alertSlice";

export const store = configureStore({
  reducer: {
    login: loginSliceReducer,
    CartReducer,
    ProductsReducer,
    SearchReducer,
    AlertSliceReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;

// export type AddDispatch = typeof store.dispatch;
