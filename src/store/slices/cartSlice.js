import { createAction, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
export const loadCart = createAction("loadCart");
export const addToCart = createAction("addToCart");
export const deleteFromCart = createAction("deleteFromCart");

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCart, (state, action) => {
      state.cart = JSON.parse(localStorage.getItem("cart")) || [];
    });
    builder.addCase(addToCart, (state, action) => {
      if (state.cart.length !== 0) {
        const tempCart = state.cart.find((item) => {
          return item.PId === action.payload.PId;
        });
        if (!tempCart) {
          let newCartItem = { ...action.payload, quantity: 1 };
          state.cart = [newCartItem, ...state.cart];
        } else {
          let updatedItemInCart = {
            ...tempCart,
            quantity: tempCart.quantity + 1,
          };
          const oldCart = state.cart.filter(
            (item) => item.PId !== action.payload.PId
          );
          state.cart = [updatedItemInCart, ...oldCart];
        }
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    });
    builder.addCase(deleteFromCart, (state, action) => {
      let updatedQuantity = state.cart.find(
        (item) => item.PId === action.payload
      );
      if (updatedQuantity.quantity > 1) {
        updatedQuantity = {
          ...updatedQuantity,
          quantity: updatedQuantity.quantity - 1,
        };
        let oldCart = state.cart.filter((item) => item.PId !== action.payload);
        state.cart = [...oldCart, updatedQuantity];
      } else {
        let oldCart = state.cart.filter((item) => item.PId !== action.payload);
        return { ...state, cart: oldCart };
      }
    });
  },
});

const CartReducer = cartSlice.reducer;
export default CartReducer;
