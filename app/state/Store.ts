import { configureStore, createSlice } from "@reduxjs/toolkit";

import { RootState, initialState } from "./State";
import { login, logout } from "./Reducers";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login,
    logout,
  },
});

export const store = configureStore({
  reducer: slice.reducer,
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const actions = slice.actions;
