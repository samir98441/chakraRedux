import { createSlice } from "@reduxjs/toolkit";
import { defaultUsers } from "../../constants/constants";

const initialState = {
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
    },
    loginValidate: (state, action) => {
      console.log("aaaa", action.payload);
      const result = defaultUsers.some(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (result) {
        return { ...state, isLoggedIn: true };
      } else return { ...state, isLoggedIn: false };
    },
  },
});

export const { logout, loginValidate } = loginSlice.actions;

export default loginSlice.reducer;
