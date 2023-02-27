import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [{}],
  toggle: false,
};

export const loadProducts = createAction("loadProducts");
export const addProducts = createAction("addProducts");
export const updateProducts = createAction("updateProducts");
export const updateFormToggle = createAction("updateFormToggle");
export const removeItem = createAction("removeItem");
export const toggleAddItem = createAction("toggleAddItem");

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProducts, (state, action) => {
      state.products = JSON.parse(localStorage.getItem("products")) ?? [];
      console.log("k vara idyp", state.products);
    });
    builder.addCase(addProducts, (state, action) => {
      const addedState = state.products;

      const tempVale = action.payload;
      console.log("inside addproducts", tempVale);
      const tempProduct = [tempVale, ...addedState];
      state.products = [...tempProduct];
    });
    builder.addCase(updateProducts, (state, action) => {
      console.log("updated prod");
      let id = action.payload.PId;
      let newName = action.payload.PName;
      let newPrice = action.payload.Price;

      let updatedProducts = state.products.map((item) => {
        if (item.PId === id) {
          return {
            ...item,
            PName: newName ? newName : item.PName,
            Price: newPrice ? newPrice : item.Price,
          };
        } else return item;
      });
      console.log("updated productsss", updatedProducts);
      state.products = updatedProducts;
      console.log("updated products", updatedProducts);
    });
    builder.addCase(updateFormToggle, (state, action) => {
      state.products = state.products.map((item) => {
        if (item.PId === action.payload) {
          let newToggle = { ...item, formToggle: !item.formToggle };
          return newToggle;
        } else return item;
      });
    });
    builder.addCase(removeItem, (state, action) => {
      const newDeletedData = state.products.filter(
        (item) => item.PId !== action.payload
      );
      state.products = newDeletedData;
    });
    builder.addCase(toggleAddItem, (state, action) => {
      state.toggle = !state.toggle;
    });
  },
});

const ProductsReducer = productsSlice.reducer;
export default ProductsReducer;
