import User from "../models/User";
import { RootState } from "./State";

export function login(state: RootState, { payload }: { payload: User }) {
  state.user = payload;
}

export function logout(state: RootState) {
  state.user = null;
}
