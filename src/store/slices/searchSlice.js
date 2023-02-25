import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  searchedItem: [],
};

export const updateSearchValue = createAction("updateSearchValue");
export const updateSearchItem = createAction("updateSearchItem");

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateSearchValue, (state, action) => {
      state.searchValue = action.payload;
    });
    builder.addCase(updateSearchItem, (state, action) => {
      let products = action.payload;
      let addedItem = [];
      products.forEach((item) => {
        if (item.PName.includes(state.searchValue)) {
          addedItem = [...addedItem, item];
        }
      });
      state.searchedItem = addedItem;
      console.log("vsl", state.searchedItem);
    });
  },
});

const SearchReducer = searchSlice.reducer;
export default SearchReducer;
