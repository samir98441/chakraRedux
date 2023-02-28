import { create } from "@mui/material/styles/createTransitions";
import { createSlice, createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = { type: "success", message: "", key: "" };

export const successAlert = createAction("successAlert");
export const warningAlert = createAction("warningAlert");

const alertSlice = createSlice({
  name: "alert",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(successAlert, (state, action) => {
      state.type = "success";
      state.message = action.payload;
      state.key = nanoid();
    });
    builder.addCase(warningAlert, (state, action) => {
      state.type = "warning";
      state.message = action.payload;
      state.key = nanoid();
    });
  },
});

const AlertSliceReducer = alertSlice.reducer;
export default AlertSliceReducer;
