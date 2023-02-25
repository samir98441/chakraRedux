import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/cartSlice";
import loginSliceReducer from "./slices/loginSlice";
import ProductsReducer from "./slices/productsSlice";
import SearchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    login: loginSliceReducer,
    CartReducer,
    ProductsReducer,
    SearchReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;

// export type AddDispatch = typeof store.dispatch;
