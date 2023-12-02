import { useSelector, TypedUseSelectorHook } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import User from "./model/User";

export interface RootState {
  user: User | null;
}

const initialState: RootState = {
  user: null,
};

function login(state: RootState, { payload }: { payload: User }) {
  state.user = payload;
}

function logout(state: RootState) {
  state.user = null;
}

export const slice = createSlice({
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